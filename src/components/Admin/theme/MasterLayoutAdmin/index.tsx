import SidebarAdmin from "../SidebarAdmin";

const MasterLayoutAdmin = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <SidebarAdmin />
      <div className="bg-[#F9FAFB] w-full">{children}</div>
    </div>
  );
};

export default MasterLayoutAdmin;
