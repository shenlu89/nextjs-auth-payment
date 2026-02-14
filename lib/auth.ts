import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { headers } from "next/headers";
import { cache } from "react";
import { ProxyAgent, setGlobalDispatcher } from "undici";
import { db } from "../db/db";
import * as schema from "../db/schema/auth-schema";

// Ensure Node.js uses proxy for outbound requests in development
if (process.env.NODE_ENV === "development") {
  const proxyUrl = process.env.HTTPS_PROXY || process.env.HTTP_PROXY || "http://127.0.0.1:7890"; // Default to common proxy port
  if (proxyUrl) {
    const dispatcher = new ProxyAgent({
      uri: proxyUrl,
      connect: {
        timeout: 60000, // Increase timeout
      },
    });
    setGlobalDispatcher(dispatcher);
  }
}

export const auth = betterAuth({
  // baseURL: process.env.BETTER_AUTH_URL,
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
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
  });
});
