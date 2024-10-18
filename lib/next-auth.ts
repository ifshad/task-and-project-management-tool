import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./prisma";
import { compare } from "bcryptjs";
import NextAuth from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },

  adapter: PrismaAdapter(prisma),

  providers: [
    CredentialsProvider({
      name: "Sign in",
      id: "credentials",
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        const email = credentials.email;
        const password = credentials.password;

        if (!email || !password) throw new Error("Missing credentials");

        const user = await prisma.user.findUnique({
          where: {
            email: email as string,
          },
        });

        if (!user || !(await compare(password as string, user.password!))) {
          throw new Error("Invalid credentials");
        }
        // if (!user || !(password as string, user.password)) {
        //   throw new Error("Invalid credentials");
        // }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
});
