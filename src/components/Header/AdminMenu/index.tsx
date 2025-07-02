import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const adminMenu = [
  "사용자 관리",
  "사용자 유형 별 권한 관리",
  "팝업 관리",
  "레이아웃 관리",
];
type AdminMenuProps = {
  adminOpen: boolean;
  setAdminOpen: (open: boolean) => void;
};

const AdminMenu = ({ adminOpen, setAdminOpen }: AdminMenuProps) => {
  const [isSelected, setIsSelected] = useState<number | null>(null);

  const handleSelect = (idx: number) => {
    setIsSelected(idx);
  };
  return (
    <>
      <DropdownMenu open={adminOpen} onOpenChange={setAdminOpen}>
        <DropdownMenuTrigger asChild>
          <div className={"lg:hidden w-[28px] h-[28px]"}>
            {adminOpen ? (
              <Image
                src="/arrow_up.svg"
                alt="arrow_up"
                width={28}
                height={28}
                className="w-[28px] h-[28px] cursor-pointer"
                draggable={false}
              />
            ) : (
              <Image
                src="/arrow_down.svg"
                alt="arrow_up"
                width={28}
                height={28}
                className="w-[28px] h-[28px] cursor-pointer"
                draggable={false}
              />
            )}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-screen left-0 mt-[10px] h-screen border-none shadow-none rounded-none p-0">
          {adminMenu.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleSelect(idx)}
              className={`px-[32px] pt-[28px] text-[16px] leading-[162.5%] tracking-[0.091px] font-pretendard
                    ${isSelected === idx ? "text-[#0C2CA7] font-semibold" : "text-[#171719] font-normal"}
                    cursor-pointer
                `}
            >
              {item}
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default AdminMenu;
