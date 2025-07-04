import Image from "next/image";

const CalendarMobile = () => {
  return (
    <div>
      <div className="flex items-center  justify-between text-[#0F0F10] w-full font-pretendard text-[20px] font-medium leading-[140%] tracking-[-0.24px]">
        <div className="flex items-center">
          <span>WEEK</span>
          <div className="ml-[6px] text-[#0626A9] font-pretendard text-[24px] font-medium leading-[133.4%] tracking-[-0.552px]">
            <span>4</span>
          </div>
          <div className="mx-[14px]">
            <span>JUN</span>
          </div>
          <span>2025</span>
        </div>
        <div className="flex">
          <div className="flex gap-[8px]">
            <div className="flex cursor-pointer w-[32px] h-[32px] justify-center items-center border border-[#DBDCDF]">
              <Image
                src="/arrow_left.svg"
                alt="arrow_left"
                width={10}
                height={20}
                className="w-[10px] h-[20px]"
                draggable={false}
              />
            </div>
            <div className="flex cursor-pointer w-[32px] h-[32px] justify-center items-center border border-[#DBDCDF]">
              <Image
                src="/arrow_right.svg"
                alt="arrow_right"
                width={10}
                height={20}
                className="w-[10px] h-[20px]"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex w-[320px] gap-[8px] px-0 py-[7px] justify-center items-center gap-[10px] rounded-[8px] border border-[#E2E2E2] text-[#000] font-pretendard text-[14px] font-medium leading-[157.1%] tracking-[0.203px]">
          <span>Lead more</span>
          <Image
            src="/arrow_down.svg"
            alt="arrow_down"
            width={12}
            height={6}
            className="w-[12px] h-[6px]"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarMobile;
