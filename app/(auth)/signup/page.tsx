"use client";

import { Eye, EyeOff, Github, Loader2 } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Link from "@/components/custom-link";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { signIn, signUp } from "@/lib/auth-client";

export default function SignupPage() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const callbackURL = searchParams.get("next") || pathname;
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendingCode, setSendingCode] = useState(false);
  const [socialLoading, setSocialLoading] = useState<
    "github" | "google" | null
  >(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [infoMsg, setInfoMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setInfoMsg("");

    const normalizedEmail = email.trim().toLowerCase();
    const nameFromEmail = normalizedEmail.split("@")[0] || "User";

    try {
      const verifyRes = await fetch("/api/auth/verification-code/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: normalizedEmail,
          code: verificationCode.trim(),
        }),
      });

      if (!verifyRes.ok) {
        const data = (await verifyRes.json().catch(() => null)) as {
          error?: string;
        } | null;
        setErrorMsg(data?.error || "Verification failed");
        return;
      }

      const { error } = await signUp.email({
        name: nameFromEmail,
        email: normalizedEmail,
        password,
        callbackURL,
      });

      if (error) {
        setErrorMsg(error.message || "Sign up failed");
      }
    } catch (_err) {
      setErrorMsg("Unexpected error, please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-6">
      <div className="w-full max-w-sm">
        <h1 className="mb-8 text-center text-3xl font-semibold text-white">
          Sign up
        </h1>

        <Card className="w-full border-white/10 bg-white/5 p-8 shadow-none">
          <CardContent className="grid gap-4 p-0">
            <Button
              type="button"
              className="w-full bg-white text-black hover:bg-white/90"
              disabled={socialLoading !== null}
              onClick={async () => {
                setSocialLoading("github");
                setErrorMsg("");
                setInfoMsg("");
                try {
                  await signIn.social({
                    provider: "github",
                    callbackURL,
                  });
                } catch {
                  setSocialLoading(null);
                  setErrorMsg("Unexpected error, please try again.");
                }
              }}
            >
              {socialLoading === "github" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Github className="h-4 w-4" />
              )}
              GitHub
            </Button>

            <Button
              type="button"
              className="w-full bg-white text-black hover:bg-white/90"
              disabled={socialLoading !== null}
              onClick={async () => {
                setSocialLoading("google");
                setErrorMsg("");
                setInfoMsg("");
                try {
                  await signIn.social({
                    provider: "google",
                    callbackURL,
                  });
                } catch {
                  setSocialLoading(null);
                  setErrorMsg("Unexpected error, please try again.");
                }
              }}
            >
              {socialLoading === "google" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <FcGoogle className="h-4 w-4" />
              )}
              Google
            </Button>

            <div className="flex items-center gap-3 py-2">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs text-white/60">or with Email</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <form onSubmit={handleSubmit} className="grid gap-3">
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                placeholder="Email"
                className="border-white/10 bg-black/30 text-white placeholder:text-white/40"
              />

              <div className="flex gap-2">
                <Input
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  required
                  inputMode="numeric"
                  placeholder="Verification code"
                  className="border-white/10 bg-black/30 text-white placeholder:text-white/40"
                />
                <Button
                  type="button"
                  variant="outline"
                  className="shrink-0 border-white/10 bg-black/30 text-white hover:bg-white/10"
                  disabled={sendingCode || email.trim().length === 0}
                  onClick={async () => {
                    const normalizedEmail = email.trim().toLowerCase();
                    setSendingCode(true);
                    setErrorMsg("");
                    setInfoMsg("");
                    try {
                      const res = await fetch(
                        "/api/auth/verification-code/send",
                        {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ email: normalizedEmail }),
                        },
                      );

                      if (!res.ok) {
                        const data = (await res.json().catch(() => null)) as {
                          error?: string;
                        } | null;
                        setErrorMsg(data?.error || "Failed to send code");
                        return;
                      }

                      setInfoMsg("Verification code sent.");
                    } catch {
                      setErrorMsg("Unexpected error, please try again.");
                    } finally {
                      setSendingCode(false);
                    }
                  }}
                >
                  {sendingCode ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    "Send Code"
                  )}
                </Button>
              </div>

              <div className="relative">
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Password"
                  className="border-white/10 bg-black/30 pr-10 text-white placeholder:text-white/40"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>

              {errorMsg ? (
                <Alert variant="destructive">
                  <AlertDescription>{errorMsg}</AlertDescription>
                </Alert>
              ) : null}

              {infoMsg ? (
                <p className="text-xs text-white/70">{infoMsg}</p>
              ) : null}

              <Button
                type="submit"
                className="w-full bg-emerald-400 text-black hover:bg-emerald-400/90"
                disabled={loading}
              >
                {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                Sign Up
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col gap-3 p-0 pt-4 text-center text-sm">
            <p className="text-white/60">
              Already have an account?{" "}
              <Link
                className="text-white underline underline-offset-4"
                href="/login"
              >
                Log in
              </Link>
            </p>
            <p className="text-xs text-white/50">
              By continuing, you are agreeing to Trae&apos;s{" "}
              <Link
                className="underline underline-offset-4"
                href="https://trae.ai/terms"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                className="underline underline-offset-4"
                href="https://trae.ai/privacy"
              >
                Privacy Policy
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
