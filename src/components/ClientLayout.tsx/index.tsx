"use client";

import Header from "@/components/Header";
import Sidebar from "../Sidebar";

type Props = {
  children: React.ReactNode;
};

const ClientLayout = ({ children }: Props) => {
  return (
    <div className="bg-[background: #FDFDFD;]">
      <Header />
      <Sidebar />
      {children}
    </div>
  );
};

export default ClientLayout;
