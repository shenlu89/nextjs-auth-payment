import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db/db";
import * as schema from "../db/schema/auth-schema";
import { headers } from "next/headers"
import { cache } from "react"

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema
    }),
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        },
    },
    // related with session table
    // session: {
    //     cookieCache: {
    //         enabled: true,
    //         maxAge: 5 * 60 // Cache duration in seconds
    //     },
    // },
});

export const getServerSession = cache(async () => {
    return auth.api.getSession({
        headers: await headers(),
    })
})