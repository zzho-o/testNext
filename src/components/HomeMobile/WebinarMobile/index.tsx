import Image from "next/image";

const WebinarMobile = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <Image
            src="/webinar_home.svg"
            alt="webinar_home"
            width={22}
            height={22}
            className="w-[22px] h-[22px]"
            draggable={false}
          />
          <div className="ml-[8px] text-[#0F0F10] font-pretendard text-[22px] font-semibold leading-[136.4%] tracking-[-0.427px] not-italic">
            <span>Webinars</span>
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
    </div>
  );
};

export default WebinarMobile;
