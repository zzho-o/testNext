import Image from "next/image";

const Header = () => {
  return (
    <div className="fixed flex h-[60px] px-[20px] py-[12px] items-center flex-shrink-0 border-b border-[rgba(194,196,200,0.52)] bg-[#FFF] z-[100] w-full">
      <Image
        src="/HanyangLogo.svg"
        alt="Hanyang"
        width={105}
        height={40}
        className="w-[105px] h-[40px]"
        draggable={false}
      />
    </div>
  );
};

export default Header;
