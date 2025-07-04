import { Button } from "@/components/ui/button";
import Image from "next/image";

type TPersonal_group = {
  type: string;
  groupName: string;
  creator: string;
  createdAt: string;
  members: number;
  views: number;
};

const personal_group: TPersonal_group[] = [
  {
    type: "공지",
    groupName: "퍼스널 그룹 이용 에티켓",
    creator: "최한양",
    createdAt: "2025-07-02",
    members: 252,
    views: 472,
  },
  {
    type: "공지",
    groupName: "설문조사",
    creator: "김한양",
    createdAt: "2025-01-02",
    members: 5,
    views: 2,
  },
  {
    type: "공지",
    groupName: "9회말 2아웃",
    creator: "강한양",
    createdAt: "2025-12-05",
    members: 2,
    views: 563,
  },
  {
    type: "공지",
    groupName: "learning you",
    creator: "오하냥",
    createdAt: "2025-06-04",
    members: 45,
    views: 525,
  },
];
const PersonalGroup = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center text-[#0F0F10] font-pretendard text-[22px] font-semibold leading-[136.4%] tracking-[-0.427px]">
          <Image
            src="/personal_group_home.svg"
            alt="personal_group_home"
            width={22}
            height={22}
            className="w-[22px] h-[22px]"
            draggable={false}
          />
          <div className="ml-[8px]" />
          <span>Personal Group</span>
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
          <div className="flex-180 text-[#5A5C63] px-[20px] py-[11px] font-pretendard text-[16px] font-medium leading-[162.5%] tracking-[0.091px]">
            <span>유형</span>
          </div>
          <div className="flex-400 text-[#5A5C63] px-[20px] py-[11px] font-pretendard text-[16px] font-medium leading-[162.5%] tracking-[0.091px]">
            <span>그룹명</span>
          </div>
          <div className="flex-180 text-[#5A5C63] px-[20px] py-[11px] font-pretendard text-[16px] font-medium leading-[162.5%] tracking-[0.091px]">
            <span>채널주</span>
          </div>
          <div className="flex-180 text-[#5A5C63] px-[20px] py-[11px] font-pretendard text-[16px] font-medium leading-[162.5%] tracking-[0.091px]">
            <span>작성일자</span>
          </div>
          <div className="flex-180 text-[#5A5C63] px-[20px] py-[11px] font-pretendard text-[16px] font-medium leading-[162.5%] tracking-[0.091px]">
            <span>가입자수</span>
          </div>
          <div className="flex-180 text-[#5A5C63] px-[20px] py-[11px] font-pretendard text-[16px] font-medium leading-[162.5%] tracking-[0.091px]">
            <span>조회수</span>
          </div>
        </div>
        {personal_group.map((item, idx) => (
          <div
            key={idx}
            className="flex w-full rounded-[8px] border boder-[1px] border-[#eeeef0]"
          >
            <div className="flex-180 text-[#5A5C63] px-[20px] py-[11px] font-pretendard text-[16px] font-medium leading-[162.5%] tracking-[0.091px]">
              <span>{item.type}</span>
            </div>
            <div className="flex-400 text-[#5A5C63] px-[20px] py-[11px] font-pretendard text-[16px] font-medium leading-[162.5%] tracking-[0.091px]">
              <span>{item.groupName}</span>
            </div>
            <div className="flex-180 text-[#5A5C63] px-[20px] py-[11px] font-pretendard text-[16px] font-medium leading-[162.5%] tracking-[0.091px]">
              <span>{item.creator}</span>
            </div>
            <div className="flex-180 text-[#5A5C63] px-[20px] py-[11px] font-pretendard text-[16px] font-medium leading-[162.5%] tracking-[0.091px]">
              <span>{item.createdAt}</span>
            </div>
            <div className="flex-180 text-[#5A5C63] px-[20px] py-[11px] font-pretendard text-[16px] font-medium leading-[162.5%] tracking-[0.091px]">
              <span>{item.members}</span>
            </div>
            <div className="flex-180 text-[#5A5C63] px-[20px] py-[11px] font-pretendard text-[16px] font-medium leading-[162.5%] tracking-[0.091px]">
              <span>{item.views}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalGroup;
