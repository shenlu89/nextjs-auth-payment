"use client";

import { Github, Loader2 } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
// import { SocialLinks } from "@/components/social-links";
import Link from "@/components/custom-link";
import { Logo } from "@/components/logo";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { signIn } from "@/lib/auth-client";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const callbackURL = searchParams.get("next") || pathname;
  const [loading, setLoading] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const { error } = await signIn.email({
        email,
        password,
        rememberMe: true,
        callbackURL,
      });

      if (error) {
        setErrorMsg(error.message || "Login failed");
      }
    } catch (_err) {
      setErrorMsg("Unexpected error, please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-1 items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-sm rounded shadow-none border-slate-300 p-8">
        <CardContent className="grid gap-6 p-0">
          <Button
            type="button"
            variant="outline"
            className="w-full rounded shadow-none border-slate-300 cursor-pointer"
            disabled={isSigningIn}
            onClick={async () => {
              setIsSigningIn(true);
              setErrorMsg("");
              try {
                await signIn.social({
                  provider: "github",
                  callbackURL,
                });
              } catch {
                setIsSigningIn(false);
                setErrorMsg("Unexpected error, please try again.");
              }
            }}
          >
            {isSigningIn ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Github className="mr-2 h-4 w-4" />
            )}
            Continue with GitHub
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                Or continue with email
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="name@example.com"
                className="rounded shadow-none border-slate-300"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Enter your password"
                className="rounded shadow-none border-slate-300"
              />
            </div>

            {errorMsg ? (
              <Alert variant="destructive">
                <AlertDescription>{errorMsg}</AlertDescription>
              </Alert>
            ) : null}

            <Button
              type="submit"
              className="w-full rounded shadow-none border-slate-300 cursor-pointer"
              disabled={loading}
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {loading ? "Signing in..." : "Continue"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 text-center text-sm p-0">
          <p className="text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link className="underline underline-offset-4" href="/register">
              Sign up
            </Link>
            .
          </p>
        </CardFooter>
      </Card>
      {/* <SocialLinks /> */}
    </div>
  );
}
