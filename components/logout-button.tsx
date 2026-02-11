"use client";

import { useRouter } from "next/navigation";
import { LuLogOut } from "react-icons/lu";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { signOut } from "@/lib/auth-client";

export default function LogoutButton() {
  const router = useRouter();
  const handleSignOut = async () =>
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.refresh();
        },
      },
    });

  return (
    <DropdownMenuItem
      onClick={handleSignOut}
      className="cursor-pointer rounded"
    >
      <LuLogOut className="mr-2 size-4" />
      <span>Log out</span>
    </DropdownMenuItem>
  );
}
