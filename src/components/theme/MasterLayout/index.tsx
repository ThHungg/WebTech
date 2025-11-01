import { memo } from "react";
import Header from "../Header";
import Footer from "../Footer";

const MasterLayout = ({ children, ...props }: { children: React.ReactNode}) => {
  return (
  <div className="" {...props}>
    <main>
        <Header />
        {children}
        <Footer />
    </main>
  </div>
  )
}

export default memo(MasterLayout);
