"use client";
import { memo } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";

const MasterLayout = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  if (pathname.startsWith("/admin") || pathname === "/auth" || pathname === "/profile") {
    return <>{children}</>;
  }
  return (
    <div className="" {...props}>
      <main>
        <Header />
        {children}
        <Footer />
   
      </main>
    </div>
  );
};

export default memo(MasterLayout);
