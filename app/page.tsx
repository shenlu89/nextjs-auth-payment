"use client";
import { useSession, signIn, signOut } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { data: session, isPending, error } = useSession();

  if (isPending) return <div>Loading...</div>;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">GitHub Auth with Better Auth</h1>
      {session ? (
        <div className="flex flex-col items-center gap-2">
          <p>Welcome, {session.user.name}</p>
          <p className="text-sm text-gray-500">{session.user.email}</p>
          {session.user.image && (
            <img src={session.user.image} alt="avatar" className="w-10 h-10 rounded-full" />
          )}
          <Button onClick={async () => {
            await signOut();
          }}>
            Sign Out
          </Button>
        </div>
      ) : (
        <Button
          onClick={async () => {
            await signIn.social({
              provider: "github",
              callbackURL: "/",
            });
          }}
        >
          Sign in with GitHub
        </Button>
      )}
    </div>
  );
}
