import Link from "@/components/custom-link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { LuUser } from "react-icons/lu";
import { BsStars } from "react-icons/bs";
import { FileText, ArrowUpRight } from "lucide-react";
import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";
import { getServerSession } from "@/lib/auth";
import { getSessionCookie } from "better-auth/cookies";
import { headers } from "next/headers";
import LogoutButton from "@/components/logout-button";

export default async function Account() {
  const hasSessionCookie = getSessionCookie(new Headers(await headers()));
  const session = hasSessionCookie ? await getServerSession() : null;

  const avatar = createAvatar(lorelei, {
    size: 128,
    seed: "Nolan",
  }).toDataUri();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="size-10 cursor-pointer rounded-full border">
          <AvatarImage
            src={session?.user?.image ?? avatar}
            alt="avatar"
            referrerPolicy="no-referrer"
          />
          <AvatarFallback>
            <AvatarImage
              src={avatar}
              alt="avatar"
              referrerPolicy="no-referrer"
            />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56 data-[state=open]:!animate-none data-[state=closed]:!animate-none shadow-none rounded border-slate-300">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-bold leading-none text-black capitalize">
              {session?.user?.name}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {session?.user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem asChild className="rounded">
          <Link href="/account" className="w-full cursor-pointer">
            <LuUser className="mr-2 size-4" />
            <span>Account</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="rounded">
          <Link href="/pricing" className="w-full cursor-pointer">
            <BsStars className="mr-2 size-4" />
            <span>Upgrade Plan</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* <DropdownMenuItem asChild className="rounded">
          <Link
            href="https://geman.shenlu.me"
            className="w-full cursor-pointer flex justify-between"
          >
            <div className="flex items-center">
              <FileText className="mr-4 size-4" />
              <span>Documentation</span>
            </div>
            <ArrowUpRight className="size-4" />
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator /> */}
        <LogoutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
