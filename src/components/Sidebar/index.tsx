import Image from "next/image";
import { useState } from "react";

const Sidebar = () => {
  const [mainMenuIdx, setMainMenuIdx] = useState<number | null>(null);
  const [subMenuIdx, setSubMenuIdx] = useState<number>(0);

  const handleMainMenu = (index: number) => {
    setMainMenuIdx(index);
  };

  const handleSubMenu = (idx: number) => {
    setSubMenuIdx(idx);
  };

  const mainMenu = [
    "home",
    "calendar",
    "notice",
    "personal_group",
    "meeting_hub",
    "webinar",
  ];

  return (
    <div className="fixed flex max-h-[calc(100%-60px)] h-full mt-[60px]">
      <div className="flex w-[64px] h-full px-[8px] py-[10px] flex-col justify-between items-center flex-shrink-0 border-r border-[rgba(194,196,200,0.52)] bg-[#F7F7F8] justify-between">
        <div className="flex flex-col gap-[8px] ">
          {mainMenu.map((item, idx) => (
            <Image
              key={idx}
              src={`/${item}${mainMenuIdx === idx ? "_active" : ""}.svg`}
              alt={item}
              onClick={() => handleMainMenu(idx)}
              width={48}
              height={48}
              className="w-[48px] h-[48px] cursor-pointer"
              draggable={false}
            />
          ))}
        </div>
        <Image
          src="/settings.svg"
          alt="settings"
          width={48}
          height={48}
          className="w-[48px] h-[48px] cursor-pointer"
          draggable={false}
        />
      </div>
      {mainMenuIdx === null ? (
        <></>
      ) : (
        <div className="flex my-[8px] ml-[8px] w-[180px] max-h-[calc(100%-16px)] p-4 flex-col items-start gap-3 flex-shrink-0 rounded-[20px] border border-[#888] shadow-[2px_2px_4px_rgba(0,0,0,0.08),0px_1px_2px_rgba(0,0,0,0.08)_inset,0px_-1px_2px_rgba(64,64,64,0.25)_inset]">
          <div
            onClick={() => handleSubMenu(0)}
            className={`text-[14px] leading-[1.429] tracking-[0.203px] font-pretendard ${subMenuIdx === 0 ? "text-[#0C2CA7] font-semibold" : "text-[#171719] font-normal"} cursor-pointer`}
          >
            사용자 관리
          </div>
          <div
            onClick={() => handleSubMenu(1)}
            className={`text-[14px] leading-[1.429] tracking-[0.203px] font-pretendard ${subMenuIdx === 1 ? "text-[#0C2CA7] font-semibold" : "text-[#171719] font-normal"} cursor-pointer`}
          >
            사용자 유형 별 권한 관리
          </div>
          <div
            onClick={() => handleSubMenu(2)}
            className={`text-[14px] leading-[1.429] tracking-[0.203px] font-pretendard ${subMenuIdx === 2 ? "text-[#0C2CA7] font-semibold" : "text-[#171719] font-normal"} cursor-pointer`}
          >
            팝업 관리
          </div>
          <div
            onClick={() => handleSubMenu(3)}
            className={`text-[14px] leading-[1.429] tracking-[0.203px] font-pretendard ${subMenuIdx === 3 ? "text-[#0C2CA7] font-semibold" : "text-[#171719] font-normal"} cursor-pointer`}
          >
            레이아웃 관리
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
