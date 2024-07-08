"use client"

import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";
import CustomBackground from "../../components/bg";
import { Sidebar } from "../../components/admin-panel/sidebar"

export default function DemoLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    {/* <Sidebar /> */}
    <AdminPanelLayout>
      {children}
    </AdminPanelLayout>
    </>
  );
}
