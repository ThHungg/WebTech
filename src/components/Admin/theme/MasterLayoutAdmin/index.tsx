"use client";
import { usePathname } from "next/navigation";
import SidebarAdmin from "../SidebarAdmin";

const MasterLayoutAdmin = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  if (pathName === "/admin/login") {
    return <>{children}</>;
  }
  return (
    <div className="flex">
      <SidebarAdmin />
      <div className="bg-[#F9FAFB] w-full">{children}</div>
    </div>
  );
};

export default MasterLayoutAdmin;
