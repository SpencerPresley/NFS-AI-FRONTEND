import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";
import CustomBackground from "../../components/bg";

export default function DemoLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminPanelLayout>
      {children}
    </AdminPanelLayout>
  );
}
