"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

interface DashboardHeaderProps {
  email: string;
}

export const DashboardHeader = ({ email }: DashboardHeaderProps) => {
  const router = useRouter();
  const supabase = createClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("http://localhost:3000");
  };

  return (
    <header className="border-b border-stone-200 bg-background">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <a
          href="/"
          className="text-xl font-semibold text-foreground"
          aria-label="Go to dashboard home"
        >
          alterhabits
        </a>

        <div className="flex items-center gap-4">
          <span className="hidden text-sm text-muted sm:block">{email}</span>
          <button
            onClick={handleSignOut}
            className="rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-stone-50"
            aria-label="Sign out"
          >
            Sign out
          </button>
        </div>
      </div>
    </header>
  );
};
