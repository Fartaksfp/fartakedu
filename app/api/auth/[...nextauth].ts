// import NextAuth, { Awaitable, RequestInternal, User } from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials"

// const handler = NextAuth({
//   providers: [
//     CredentialsProvider({
//         name: 'OTP',
//         credentials: {
//             phone: { label: "phone", type: "number" },
//             code: { label: "code", type: "number" }
//         },
//         authorize: function (credentials: Record<"phone" | "code", string> | undefined, req: Pick<RequestInternal, "body" | "query" | "headers" | "method">): Awaitable<User | null> {
            
            
            
//         }
//     })
//   ]
// })

// export { handler as GET, handler as POST }