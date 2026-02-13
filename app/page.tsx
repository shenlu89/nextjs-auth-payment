import {
  AppWindow,
  ArrowUpRight,
  CreditCard,
  Database,
  LayoutGrid,
  Mail,
  ShieldCheck,
  Wind,
} from "lucide-react";
import Link from "next/link";
import { GrConnect } from "react-icons/gr";

export default function Home() {
  return (
    <main className="flex-1">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
            Ship your SaaS in days,
            <br />
            <span className="text-primary">not weeks.</span>
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg">
            Built with Next.js, shadcn/ui, Better Auth, Drizzle ORM, Postgres,
            Stripe, Tailwind CSS, and Resend.
          </p>
        </div>

        <section className="mt-16">
          <div className="rounded-none bg-border p-px">
            <div className="grid gap-px rounded-[7px] bg-border sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Next.js documentation"
                className="group relative bg-card p-6 hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
              >
                <ArrowUpRight className="pointer-events-none absolute right-6 top-6 h-6 w-6 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100" />
                <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
                  <AppWindow className="h-6 w-6" />
                  <span>Full-stack Framework</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold">Next.js</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Modern React framework for building production web apps with
                  routing, SSR, and edge-ready APIs.
                </p>
              </Link>

              <Link
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tailwind CSS documentation"
                className="group relative bg-card p-6 hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
              >
                <ArrowUpRight className="pointer-events-none absolute right-6 top-6 h-6 w-6 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100" />
                <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
                  <Wind className="h-6 w-6" />
                  <span>Styling</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold">Tailwind CSS</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Utility-first CSS for rapid UI development—design systems,
                  dark mode, and great DX.
                </p>
              </Link>

              <Link
                href="https://ui.shadcn.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="shadcn/ui documentation"
                className="group relative bg-card p-6 hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
              >
                <ArrowUpRight className="pointer-events-none absolute right-6 top-6 h-6 w-6 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100" />
                <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
                  <LayoutGrid className="h-6 w-6" />
                  <span>UI Components</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold">shadcn/ui</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Beautifully designed components built on Radix UI and Tailwind
                  CSS—easy to copy, customize, and ship.
                </p>
              </Link>

              <Link
                href="https://www.better-auth.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Better Auth documentation"
                className="group relative bg-card p-6 hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
              >
                <ArrowUpRight className="pointer-events-none absolute right-6 top-6 h-6 w-6 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100" />
                <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
                  <ShieldCheck className="h-6 w-6" />
                  <span>Authentication</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold">Better Auth</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Secure auth with email/password and OAuth—sessions, callbacks,
                  and client helpers included.
                </p>
              </Link>

              <Link
                href="https://orm.drizzle.team/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Drizzle ORM documentation"
                className="group relative bg-card p-6 hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
              >
                <ArrowUpRight className="pointer-events-none absolute right-6 top-6 h-6 w-6 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100" />
                <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
                  <GrConnect className="h-6 w-6" />
                  <span>ORM</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold">Drizzle ORM</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  TypeScript-first ORM with a great developer experience and
                  predictable, type-safe queries.
                </p>
              </Link>

              <Link
                href="https://www.postgresql.org/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Postgres documentation"
                className="group relative bg-card p-6 hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
              >
                <ArrowUpRight className="pointer-events-none absolute right-6 top-6 h-6 w-6 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100" />
                <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
                  <Database className="h-6 w-6" />
                  <span>Database</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold">Postgres</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  A reliable relational database for SaaS—indexes, constraints,
                  migrations, and performance at scale.
                </p>
              </Link>

              <Link
                href="https://stripe.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Stripe documentation"
                className="group relative bg-card p-6 hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
              >
                <ArrowUpRight className="pointer-events-none absolute right-6 top-6 h-6 w-6 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100" />
                <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
                  <CreditCard className="h-6 w-6" />
                  <span>Payments</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold">Stripe</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Subscription billing, checkout, and webhooks to power payments
                  end-to-end.
                </p>
              </Link>

              <Link
                href="https://resend.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resend documentation"
                className="group relative bg-card p-6 hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
              >
                <ArrowUpRight className="pointer-events-none absolute right-6 top-6 h-6 w-6 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100" />
                <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
                  <Mail className="h-6 w-6" />
                  <span>Email</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold">Resend</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Transactional email API with great deliverability—send
                  onboarding, receipts, and auth emails.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
