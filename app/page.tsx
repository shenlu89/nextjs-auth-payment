import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 text-center">
      {/* <div className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-sm font-medium text-muted-foreground">
        <span className="mr-2 h-2 w-2 rounded-full bg-primary"></span>
        v2.0 is now live — New Next.js 14 Templates
      </div> */}
      <h1 className="text-7xl font-extrabold tracking-tight sm:text-7xl">
        Ship your SaaS in days,
        <br />
        <span className="text-primary">not months.</span>
      </h1>
      <p className="max-w-2xl text-lg text-muted-foreground">
        The ultimate open-source starter kit for developers. Built with Next.js,
        Tailwind CSS, Drizzle, and Stripe. Focus on your core product while we
        handle the boilerplate.
      </p>
      <Button asChild size="lg">
        <Link href="/login">Get Started</Link>
      </Button>
    </div>
  );
}
