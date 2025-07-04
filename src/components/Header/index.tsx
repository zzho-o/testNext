import { useState } from "react";
import Image from "next/image";
import { useModalStore, useUserStore } from "@/stores/useStore";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import AdminMenu from "./AdminMenu";
import CreateWebinar from "./CreateWebinar";

const mainMenu = [
  "home",
  "calendar",
  "notice",
  "personal_group",
  "meeting_hub",
  "webinar",
];
const menuLabels = [
  "Home",
  "Calendar",
  "Notice",
  "Personal Group",
  "Meeting Hub",
  "Webinar",
];

const Header = () => {
  const { name, position, signout } = useUserStore();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [admin, setAdmin] = useState<boolean>(false);
  const [adminOpen, setAdminOpen] = useState<boolean>(false);
  const { openModal } = useModalStore();

  const handleSignOut = () => {
    signout();
  };

  const handleMainMenu = () => {
    setAdmin(true);
    setIsOpen(false);
  };

  const handleModal = () => {
    openModal();
  };

  return (
    <div className="fixed top-0 left-0 w-full">
      <div className="mx-[12px]">
        <CreateWebinar />
      </div>
      <div
        className={` flex ${name && position ? "justify-center" : "justify-start"}  relative lg:justify-between h-[60px] px-[20px] py-[12px] items-center flex-shrink-0 border-b border-[rgba(194,196,200,0.52)] bg-[#fff] z-[100] w-full `}
      >
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <div
              className={`${name && position ? "" : "hidden"} lg:hidden w-[28px] h-[28px] absolute left-[20px]`}
            >
              <Image
                src="/mobile_menu.svg"
                alt="mobile_menu"
                width={28}
                height={28}
                className={`w-[28px] h-[28px] cursor-pointer ${isOpen || adminOpen ? "hidden" : ""}`}
                draggable={false}
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-screen left-0 mt-[10px] h-screen border-none shadow-none rounded-none px-[20px] pt-[20px]">
            {mainMenu.map((item, idx) => (
              <div
                key={idx}
                onClick={handleMainMenu}
                className="flex items-center cursor-pointer "
              >
                <Image
                  src={`/${item}.svg`}
                  alt={item}
                  width={48}
                  height={48}
                  className="w-[48px] h-[48px]"
                  draggable={false}
                />
                <div className="text-[#B7BFCB] font-pretendard text-[16px] font-normal leading-[1.625] tracking-[0.091px]">
                  {menuLabels[idx]}
                </div>
              </div>
            ))}
            <div className="flex  items-center rounded-[10px] bg-[rgba(12,44,167,0.20)] w-full h-[48px]">
              <Image
                src={"/settings_mobile.svg"}
                alt="settings_mobile"
                width={48}
                height={48}
                className="w-[48px] h-[48px]"
                draggable={false}
              />
              <div className="text-[#0C2CA7] text-[16px] font-semibold leading-[1.625] tracking-[0.091px] font-pretendard">
                <span>Setting</span>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <Image
          src="/HanyangLogo.svg"
          alt="Hanyang"
          width={105}
          height={40}
          className="w-[105px] h-[40px] cursor-pointer"
          draggable={false}
          onClick={handleSignOut}
        />
        <div
          className={`${name && position ? "" : "hidden"} lg:hidden  absolute right-[20px]`}
        >
          {isOpen ? (
            <></>
          ) : (
            <div className="flex items-center gap-[16px]">
              {adminOpen ? (
                <></>
              ) : (
                <Image
                  onClick={handleModal}
                  src="/bell.svg"
                  alt="bell"
                  width={28}
                  height={28}
                  className="w-[28px] h-[28px] cursor-pointer"
                  draggable={false}
                />
              )}
              {admin ? (
                <AdminMenu adminOpen={adminOpen} setAdminOpen={setAdminOpen} />
              ) : (
                <></>
              )}
            </div>
          )}
        </div>
        <div className="hidden lg:flex items-center h-full gap-[12px]">
          <Image
            onClick={handleModal}
            src="/bell.svg"
            alt="bell"
            width={28}
            height={28}
            className="w-[28px] h-[28px] cursor-pointer"
            draggable={false}
          />
          <div className="w-[1px] h-[32px] bg-[rgba(194,196,200,0.52)]" />
          <div className="flex">
            <Image
              src="/avatar.svg"
              alt="avatar"
              width={32}
              height={32}
              className="w-[32px] h-[32px] rounded-[100px]"
              draggable={false}
            />
            <div className="w-[12px]" />
            <div className="flex flex-col w-[60px] justify-center">
              <div className="text-[#171719] text-[14px] font-semibold leading-[1.429] tracking-[0.203px] font-pretendard">
                <span>{name}</span>
              </div>
              <div className="text-[#959CA9] text-[12px] font-normal leading-[1.334] tracking-[0.302px] font-pretendard">
                <span>{position}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
