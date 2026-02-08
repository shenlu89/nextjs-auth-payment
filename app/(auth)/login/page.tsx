"use client";

import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "@/lib/auth-client";

export default function LoginPage() {
  const { data: session, isPending } = useSession();
  const [isSigningIn, setIsSigningIn] = useState(false);

  if (isPending) return <div>Loading...</div>;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <Logo />
      <h1 className="text-2xl font-bold">GitHub Auth with Better Auth</h1>
      {session ? (
        <div className="flex flex-col items-center gap-2">
          <p>Welcome, {session.user.name}</p>
          <p className="text-sm text-gray-500">{session.user.email}</p>
          {session.user.image && (
            <img
              src={session.user.image}
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
          )}
          <Button
            onClick={async () => {
              await signOut();
            }}
          >
            Sign Out
          </Button>
        </div>
      ) : (
        <Button
          disabled={isSigningIn}
          onClick={async () => {
            setIsSigningIn(true);
            try {
              await signIn.social({
                provider: "github",
                callbackURL: "/",
              });
            } catch (error) {
              console.error(error);
              setIsSigningIn(false);
            }
          }}
        >
          {isSigningIn && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isSigningIn ? "Signing in..." : "Sign in with GitHub"}
        </Button>
      )}
    </div>
  );
}
