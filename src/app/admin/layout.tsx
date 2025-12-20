import MasterLayoutAdmin from "@/components/Admin/theme/MasterLayoutAdmin";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin dashboard",
};

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MasterLayoutAdmin>{children}</MasterLayoutAdmin>;
}
