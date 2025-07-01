import Image from "next/image";
import Sidebar from "../Sidebar";

const Header = () => {
  return (
    <>
      <div className="fixed flex justify-between h-[60px] px-[20px] py-[12px] items-center flex-shrink-0 border-b border-[rgba(194,196,200,0.52)] bg-[#FFF] z-[100] w-full">
        <Image
          src="/HanyangLogo.svg"
          alt="Hanyang"
          width={105}
          height={40}
          className="w-[105px] h-[40px]"
          draggable={false}
        />
        <div className="hidden lg:flex items-center h-full gap-[12px]">
          <Image
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
                <span>홍길동</span>
              </div>
              <div className="text-[#959CA9] text-[12px] font-normal leading-[1.334] tracking-[0.302px] font-pretendard">
                <span>학습자</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <Sidebar />
      </div>
    </>
  );
};

export default Header;
