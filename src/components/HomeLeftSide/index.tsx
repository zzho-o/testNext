import Image from "next/image";

const HomeLeftSide = ({ className = "" }: { className?: string }) => {
  return (
    <div className={className}>
      <div className="flex gap-[12px]">
        <Image
          src="/home_banner.svg"
          alt="home_banner"
          width={633}
          height={360}
          className="flex-50 w-[50%] h-[360px]cursor-pointer"
          draggable={false}
        />
        <div className="flex-50 w-[50%] aspect-[1.825] flex-shrink-0 rounded-[8px] border border-[#EEEFF0] bg-white shadow-[4px_6px_18px_rgba(0,0,0,0.06)]"></div>
      </div>
    </div>
  );
};

export default HomeLeftSide;
