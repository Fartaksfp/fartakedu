import supabase from "@/lib/supabaseClient";
import NextAuth, { User, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { SupabaseAdapter } from "@auth/supabase-adapter";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      phone?: string;
    };
  }
  interface User {
    id: string;
    phone?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId: string;
    phone?: string;
  }
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "OTP",
      credentials: {
        phone: { label: "Phone", type: "text" },
        otp: { label: "OTP", type: "text" },
      },
      async authorize(
        credentials: Record<"phone" | "otp", string> | undefined
      ) {
        if (!credentials?.phone || !credentials?.otp) {
          return null;
        }

        const { phone, otp } = credentials;

        const { data, error } = await supabase.rpc("validate_otp", {
          p_phone: phone,
          p_otp: otp,
        });

        if (error || !data) {
          console.error("OTP validation failed:", error);
          return null;
        }

        const userData = data[0];

        return {
          id: userData.user_id,
          phone: userData.phone,
        };
      },
    }),
  ],

  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_PROJECT_URL!,
    secret: process.env.SUPABASE_ROLE_KEY!,
  }),

  session: {
    strategy: "jwt" as const,
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: User | undefined }) {
      if (user) {
        token.userId = user.id;
        token.phone = user.phone;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      session.user = {
        id: token.userId,
        phone: token.phone,
      };
      return session;
    },
  },
});

export { handler as GET, handler as POST };
