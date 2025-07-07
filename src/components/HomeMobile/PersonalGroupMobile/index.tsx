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

const PersonalGroupMobile = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/personal_group_home.svg"
            alt="personal_group_home"
            width={22}
            height={22}
            className="w-[22px] h-[22px]"
            draggable={false}
          />
          <div className="ml-[8px] text-[#0F0F10] font-pretendard text-[22px] font-semibold leading-[136.4%] tracking-[-0.427px] not-italic">
            <span>Personal Group</span>
          </div>
        </div>
        <Image
          src="/more_plus.svg"
          alt="more_plus"
          width={14}
          height={14}
          className="w-[14px] h-[14px] cursor-pointer"
          draggable={false}
        />
      </div>
      <div className="mt-[20px]" />
      <Button className="flex cursor-pointer w-full h-[36px] px-[16px] py-[5px] flex-col justify-center items-center gap-[10px] flex-shrink-0 rounded-[8px] bg-[rgba(6,38,169,0.10)] text-[#0626A9] font-pretendard text-[14px] font-medium leading-[157.1%] tracking-[0.203px] not-italic">
        <span>Create</span>
      </Button>
      <div className="mt-[12px]" />
      <div className="flex flex-col gap-[8px]">
        {personal_group.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start h-[126px] p-[16px] self-stretch rounded-[8px] border border-[#EEEEF0] bg-[#FFF] shadow-[4px_6px_18px_0px_rgba(0,0,0,0.06)]"
          >
            <div className="text-[#292A2D] font-pretendard text-[18px] font-semibold leading-[144.5%] tracking-[-0.004px] not-italic">
              <span>{item.groupName}</span>
            </div>
            <div className="flex mt-[8px] items-center gap-[10px]">
              <div className="flex flex-col items-start gap-[10px] px-[6px] py-[1px] border border-[#0626A9] text-[#0626A9] font-pretendard text-[13px] font-medium leading-[138.5%] tracking-[0.252px] not-italic">
                <span>{item.type}</span>
              </div>
              <div className="ml-[] text-[#70737C] font-pretendard text-[13px] font-medium leading-[138.5%] tracking-[0.252px] not-italic">
                <span>{item.createdAt}</span>
              </div>
            </div>
            <div className="flex mt-[16px] items-center justify-between">
              <div className="flex items-center">
                <div className="flex items-center">
                  <Image
                    src="/crown.svg"
                    alt="crown"
                    width={20}
                    height={20}
                    className="w-[20px] h-[20px]"
                    draggable={false}
                  />
                  <div className="ml-[4px]" />
                  <div className="text-[#70737C] font-pretendard text-[13px] font-medium leading-[138.5%] tracking-[0.252px] not-italic">
                    <span>{item.creator}</span>
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
                  <div className="text-[#70737C] font-pretendard text-[13px] font-medium leading-[138.5%] tracking-[0.252px] not-italic">
                    <span>{item.members}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalGroupMobile;
