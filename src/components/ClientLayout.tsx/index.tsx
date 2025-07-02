"use client";

import Header from "@/components/Header";
import Modal from "../Modal";

type Props = {
  children: React.ReactNode;
};

const ClientLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Modal />
      {children}
    </>
  );
};

export default ClientLayout;
