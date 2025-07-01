import Image from "next/image";
import calendar from "@/assets/calendar.svg";
import home from "@/assets/home.svg";
import meeting_hub from "@/assets/meeting_hub.svg";
import notice from "@/assets/notice.svg";
import personal_group from "@/assets/personal_group.svg";
import webinar from "@/assets/webinar.svg";
import settings from "@/assets/settings.svg";
import { useState } from "react";

const Sidebar = () => {
  const [mainMenu, setMainMenu] = useState<number>(0);
  const [subMenu, setSubMenu] = useState<number>(0);

  const handleMainMenu = (index: number) => {
    setIsActive(index); // 예시
  };

  const handleSubMenu = (idx: number) => {
    setSubMenu(idx);
  };

  return (
    // pt 줘야함 헤더 크기에 맞춰서
    <div className="fixed flex h-full mt-[60px]">
      <div className="flex w-[64px] h-full px-[8px] py-[10px] flex-col justify-between items-center flex-shrink-0 border-r border-[rgba(194,196,200,0.52)] bg-[#F7F7F8] justify-between">
        <div className="flex flex-col gap-[8px] mt-[]">
          <Image
            src={home}
            alt="home"
            className="w-[48px] h-[48px] cursor-pointer"
            draggable={false}
          />
          <Image
            src={calendar}
            alt="calendar"
            className="w-[48px] h-[48px] cursor-pointer"
            draggable={false}
          />
          <Image
            src={notice}
            alt="notice"
            className="w-[48px] h-[48px] cursor-pointer"
            draggable={false}
          />
          <Image
            src={personal_group}
            alt="personal_group"
            className="w-[48px] h-[48px] cursor-pointer"
            draggable={false}
          />
          <Image
            src={meeting_hub}
            alt="meeting_hub"
            className="w-[48px] h-[48px] cursor-pointer"
            draggable={false}
          />
          <Image
            src={webinar}
            alt="webinar"
            className="w-[48px] h-[48px] cursor-pointer"
            draggable={false}
          />
        </div>
        <div className="">
          <Image
            src={settings}
            alt="settings"
            className="w-[48px] h-[48px] cursor-pointer"
            draggable={false}
          />
        </div>
      </div>
      <div className="flex my-[8px] ml-[8px] w-[180px] max-h-[calc(100%-76px)] p-4 flex-col items-start gap-3 flex-shrink-0 rounded-[20px] border border-[#888] shadow-[2px_2px_4px_rgba(0,0,0,0.08),0px_1px_2px_rgba(0,0,0,0.08)_inset,0px_-1px_2px_rgba(64,64,64,0.25)_inset]">
        <div
          onClick={() => handleSubMenu(0)}
          className={`text-[14px] leading-[1.429] tracking-[0.203px] font-pretendard ${subMenu === 0 ? "text-[#0C2CA7] font-semibold" : "text-[#171719] font-normal"} cursor-pointer`}
        >
          사용자 관리
        </div>
        <div
          onClick={() => handleSubMenu(1)}
          className={`text-[14px] leading-[1.429] tracking-[0.203px] font-pretendard ${subMenu === 1 ? "text-[#0C2CA7] font-semibold" : "text-[#171719] font-normal"} cursor-pointer`}
        >
          사용자 유형 별 권한 관리
        </div>
        <div
          onClick={() => handleSubMenu(2)}
          className={`text-[14px] leading-[1.429] tracking-[0.203px] font-pretendard ${subMenu === 2 ? "text-[#0C2CA7] font-semibold" : "text-[#171719] font-normal"} cursor-pointer`}
        >
          팝업 관리
        </div>
        <div
          onClick={() => handleSubMenu(3)}
          className={`text-[14px] leading-[1.429] tracking-[0.203px] font-pretendard ${subMenu === 3 ? "text-[#0C2CA7] font-semibold" : "text-[#171719] font-normal"} cursor-pointer`}
        >
          레이아웃 관리
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
