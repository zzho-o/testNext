"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

type Props = {
  children: React.ReactNode;
};

const ClientLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Sidebar />
      {children}
    </>
  );
};

export default ClientLayout;
