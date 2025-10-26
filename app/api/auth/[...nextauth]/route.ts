import supabase from "@/lib/supabaseClient";
import NextAuth, { User, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      phone: string;
    };
  }
  interface User {
    id: string;
    phone: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId: string;
    phone: string;
  }
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "OTP",
      credentials: {
        phone: { label: "Phone", type: "text" },
        code: { label: "OTP", type: "text" },
      },
      async authorize(
        credentials: Record<"phone" | "code", string> | undefined
      ) {
        if (!credentials?.phone || !credentials?.code) {
          return null;
        }

        const { phone, code } = credentials;

        const { data, error } = await supabase.rpc("validate_otp", {
          phone: phone,
          code: code,
        });

        console.log(code);

        if (error || !data) {
          console.error("OTP validation failed:", error);
          return null;
        }

        return {
          id: data.user_id,
          phone: data.phone,
        };
      },
    }),
  ],
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

export { handler as GET, handler as POST }
