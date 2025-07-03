"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ReactNode } from "react";

export const CommonModal = ({
  title,
  children,
  open,
  onOpenChange = () => {},
}: {
  title: string;
  children: ReactNode;
  open: boolean;
  onOpenChange?: (val: boolean) => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-[#171719] font-pretendard text-[20px] font-semibold leading-[140%] tracking-[-0.24px] w-full flex justify-center mt-[22px] px-[22px]">
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="relative h-full max-h-[calc(100%-118px)] px-[16px]">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};
