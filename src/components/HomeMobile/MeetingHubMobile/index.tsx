import { Button } from "@/components/ui/button";
import Image from "next/image";

type TMeeting_hub = {
  title: string;
  type: "Online" | "Offline";
  time: string;
  date: string;
  participants: number;
};

const meeting_hub: TMeeting_hub[] = [
  {
    title: "Checking Progress by Group",
    type: "Offline",
    time: "3:30 PM",
    date: "2025-07-02",
    participants: 28,
  },
  {
    title:
      "Kick-off Meeting for Group 4 Projects Checking Assignment on September",
    type: "Online",
    time: "3:30 PM",
    date: "2025-07-02",
    participants: 28,
  },
  {
    title: "Focus Group Interview",
    type: "Offline",
    time: "3:30 PM",
    date: "2025-07-02",
    participants: 28,
  },
  {
    title: "Checking Assignment on September",
    type: "Online",
    time: "3:30 PM",
    date: "2025-07-02",
    participants: 28,
  },
];

const MeetingHubMobile = () => {
  return (
    <div>
      <div className="flex items-center">
        <Image
          src="/meeting_hub_home.svg"
          alt="meeting_hub_home"
          width={22}
          height={22}
          className="w-[22px] h-[22px]"
          draggable={false}
        />
        <div className="ml-[8px] text-[#0F0F10] font-pretendard text-[22px] font-semibold leading-[136.4%] tracking-[-0.427px] not-italic">
          <span>Meeting Hub</span>
        </div>
      </div>
      <div className="mt-[20px]" />
      <Button className="flex cursor-pointer w-full h-[36px] px-[16px] py-[5px] flex-col justify-center items-center gap-[10px] flex-shrink-0 rounded-[8px] bg-[rgba(6,38,169,0.10)] text-[#0626A9] font-pretendard text-[14px] font-medium leading-[157.1%] tracking-[0.203px] not-italic">
        <span>Create</span>
      </Button>
      <div className="mt-[12px]" />
      <div className="flex flex-col gap-[8px]">
        {meeting_hub.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start gap-[10px] overflow-hidden h-[94px] p-[16px] flex-shrink-0 self-stretch rounded-[8px] border border-[#EEEEF0] bg-[#FFF] shadow-[4px_6px_18px_0px_rgba(0,0,0,0.06)]"
          >
            <div className="text-[#292A2D]  whitespace-nowrap font-pretendard text-[18px] font-semibold leading-[144.5%] tracking-[-0.004px] not-italic">
              <span>{item.title}</span>
              <div className="mt-[8px] flex items-center">
                {item.type === "Offline" ? (
                  <div className="flex justify-center w-[73px] items-center gap-[6px] px-[6px] py-[3px] rounded-[8px] bg-[#DBDCDF] text-[#5A5C63] font-pretendard text-[12px] font-medium leading-[133.4%] tracking-[0.302px] not-italic">
                    <div className="w-[4px] h-[4px] rounded-full bg-[#5A5C63]"></div>
                    <span>Offline</span>
                  </div>
                ) : (
                  <div className="flex w-[73px] px-[7px] py-[4px] justify-center items-center gap-[6px] rounded-[8px] bg-[rgba(50,205,50,0.10)] text-[#32CD32] font-pretendard text-[12px] font-medium leading-[133.4%] tracking-[0.302px] not-italic">
                    <div className="w-[4px] h-[4px] rounded-full bg-[#32CD32]"></div>
                    <span>Offline</span>
                  </div>
                )}
                <div className="ml-[12px]" />
                <div className="text-[#70737C] font-pretendard text-[12px] font-medium leading-[133.4%] tracking-[0.302px] not-italic">
                  <span>{item.date}</span>
                </div>
                <div className="ml-[8px]" />
                <div className="text-[#70737C] font-pretendard text-[12px] font-medium leading-[133.4%] tracking-[0.302px] not-italic">
                  <span>{item.time}</span>
                </div>
                <div className="ml-[10px]" />
                <Image
                  src="/person.svg"
                  alt="person"
                  width={18}
                  height={18}
                  className="w-[18px] h-[18px]"
                  draggable={false}
                />
                <div className="ml-[5px]" />
                <div className="text-[#70737C] font-pretendard text-[12px] font-medium leading-[133.4%] tracking-[0.302px] not-italic">
                  <span>{item.participants}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetingHubMobile;
