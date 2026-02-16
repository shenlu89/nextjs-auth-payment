import { getSessionCookie } from "better-auth/cookies";
import { headers } from "next/headers";
import Link from "next/link";
import Account from "@/components/account";
import { Logo } from "@/components/logo";
import { NavLinks } from "@/components/nav-links"; // Import the new component
import { Button } from "@/components/ui/button";
import { getServerSession } from "@/lib/auth";

export default async function Header() {
  const hasSessionCookie = getSessionCookie(new Headers(await headers()));
  const session = hasSessionCookie ? await getServerSession() : null;
  return (
    <header className="flex max-w-7xl container mx-auto select-none md:relative fixed inset-x-0 bottom-0 z-50 md:bg-transparent bg-white px-4 min-h-16 justify-between py-4">
      <div className="flex w-full">
        <Link href={"/"} className="flex space-x-1 items-center justify-center">
          <Logo className="md:flex hidden" />
          <span className="text-2xl font-extrabold tracking-tight self-center pr-8 md:flex hidden">
            OpenSaaSKit
          </span>
        </Link>
        <NavLinks /> {/* Use the new component here */}
      </div>
      <nav className="flex w-full md:w-auto md:justify-start justify-center items-center">
        {!session && (
          <Button
            variant="outline"
            size="sm"
            asChild
            className="rounded shadow-none transition-none border-slate-300 text-slate-600"
          >
            <Link href={"/login"}>Log in</Link>
          </Button>
        )}
        {session && <Account />}
      </nav>
    </header>
  );
}
