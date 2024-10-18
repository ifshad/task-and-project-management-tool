"use client";

import { cn } from "@/lib/utils";
import { useStore } from "@/hooks/store/use-store";
import { useSidebarToggle } from "@/hooks/store/use-sidebar-toggle";
import { Sidebar } from "./sidebar";
import { Footer } from "./footer";

export default function WorkSPacePanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;

  return (
    <>
      <Sidebar />
      <main
        className={cn(
          "min-h-[calc(100vh_-_56px)] bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300",
          sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-64"
        )}
      >
        {children}
      </main>
      <footer
        className={cn(
          "transition-[margin-left] ease-in-out duration-300",
          sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-64"
        )}
      >
        <Footer />
      </footer>
    </>
  );
}
