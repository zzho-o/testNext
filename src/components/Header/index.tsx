import Image from "next/image";
import Hanyang from "@/assets/HanyangLogo.svg";

const Header = () => {
  return (
    <div className="fixed flex h-[60px] px-[20px] py-[12px] items-center flex-shrink-0 border-b border-[rgba(194,196,200,0.52)] bg-[#FFF] z-[100] w-full">
      <Image
        src={Hanyang}
        alt="Hanyang Logo"
        className="w-[105px] h-[40px]"
        draggable={false}
      />
    </div>
  );
};

export default Header;
