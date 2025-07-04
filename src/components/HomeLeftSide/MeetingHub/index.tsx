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
const MeetingHub = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center text-[#0F0F10] font-pretendard text-[22px] font-semibold leading-[136.4%] tracking-[-0.427px]">
          <Image
            src="/meeting_hub_home.svg"
            alt="meeting_hub_home"
            width={22}
            height={22}
            className="w-[22px] h-[22px]"
            draggable={false}
          />
          <div className="ml-[8px]" />
          <span>Meeting Hub</span>
          <div className="ml-[20px]" />
          <Button className="inline-flex flex-col items-start gap-[10px] px-[16px] py-[5px] rounded-[8px] bg-[rgba(6,38,169,0.10)] text-[#0626A9] font-pretendard text-[14px] font-medium leading-[157.1%] tracking-[0.203px]">
            Create
          </Button>
        </div>
        <div className="flex items-center gap-[6px] text-[#0626A9] font-pretendard text-[14px] font-medium leading-[157.1%] tracking-[0.203px] underline cursor-pointer">
          <span>MORE</span>
          <Image
            src="/more_plus.svg"
            alt="more_plus"
            width={8}
            height={8}
            className="w-[8px] h-[8px]"
            draggable={false}
          />
        </div>
      </div>
      <div className="mt-[20px]" />

      <div className="flex flex-col gap-[4px]">
        <div className="flex w-full rounded-[8px] bg-[#f1f1f3] ">
          <div className="flex-480 text-[#5A5C63] px-[20px] py-[11px] font-pretendard text-[16px] font-medium leading-[162.5%] tracking-[0.091px]">
            <span>Title</span>
          </div>
          <div className="flex-205 text-[#5A5C63] px-[20px] py-[11px] font-pretendard text-[16px] font-medium leading-[162.5%] tracking-[0.091px]">
            <span>Type</span>
          </div>
          <div className="flex-205 text-[#5A5C63] px-[20px] py-[11px] font-pretendard text-[16px] font-medium leading-[162.5%] tracking-[0.091px]">
            <span>Time</span>
          </div>
          <div className="flex-205 text-[#5A5C63] px-[20px] py-[11px] font-pretendard text-[16px] font-medium leading-[162.5%] tracking-[0.091px]">
            <span>Date</span>
          </div>
          <div className="flex-205 text-[#5A5C63] px-[20px] py-[11px] font-pretendard text-[16px] font-medium leading-[162.5%] tracking-[0.091px]">
            <span>Participants</span>
          </div>
        </div>
        {meeting_hub.map((item, idx) => (
          <div
            key={idx}
            className="flex w-full rounded-[8px] border boder-[1px] border-[#eeeef0]"
          >
            <div className="flex-480 text-[#5A5C63] px-[20px] py-[11px] font-pretendard text-[16px] font-medium leading-[162.5%] tracking-[0.091px]">
              <span>{item.title}</span>
            </div>
            <div className="flex-205 text-[#5A5C63] px-[20px] py-[11px] font-pretendard text-[16px] font-medium leading-[162.5%] tracking-[0.091px]">
              <span>{item.type}</span>
            </div>
            <div className="flex-205 text-[#5A5C63] px-[20px] py-[11px] font-pretendard text-[16px] font-medium leading-[162.5%] tracking-[0.091px]">
              <span>{item.time}</span>
            </div>
            <div className="flex-205 text-[#5A5C63] px-[20px] py-[11px] font-pretendard text-[16px] font-medium leading-[162.5%] tracking-[0.091px]">
              <span>{item.date}</span>
            </div>
            <div className="flex-205 text-[#5A5C63] px-[20px] py-[11px] font-pretendard text-[16px] font-medium leading-[162.5%] tracking-[0.091px]">
              <span>{item.participants}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetingHub;
