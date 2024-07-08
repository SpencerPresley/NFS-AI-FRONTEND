"use client";

import { cn } from "@/lib/utils";
import { useStore } from "../../hooks/use-store";
import { Footer } from "./footer";
import { Sidebar } from "./sidebar";
import { useSidebarToggle } from "../../hooks/use-sidebar-toggle";
import CustomBackground from "../bg";

interface SidebarState {
  isOpen: boolean;
}

export default function AdminPanelLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const sidebar = useStore(useSidebarToggle, (state) => state as SidebarState);

  if (!sidebar) return null;

  return (
    <div className="relative">
      <Sidebar />
      <div className="relative z-0"> {/* Add this wrapper */}
        <CustomBackground sidebarOpen={sidebar.isOpen} />
        <main
          className={cn(
            "relative z-10 min-h-[calc(100vh_-_56px)] transition-[margin-left] ease-in-out duration-300",
            sidebar.isOpen ? "lg:ml-72" : "lg:ml-[90px]"
          )}
        >
          {children}
        </main>
        {/* <footer
          className={cn(
            "relative z-10 transition-[margin-left] ease-in-out duration-300",
            sidebar.isOpen ? "lg:ml-72" : "lg:ml-[90px]"
          )}
        >
          <Footer />
        </footer> */}
      </div>
    </div>
  );
}