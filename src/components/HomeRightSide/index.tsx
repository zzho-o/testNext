import Image from "next/image";

const HomeRightSide = ({ className = "" }: { className?: string }) => {
  return (
    <div className={className}>
      <Image
        src="/home_banner.svg"
        alt="home_banner"
        width={633}
        height={360}
        className="w-full aspect-[462/615] flex-shrink-0 rounded-[8px] border border-[#EEEFF0] bg-white shadow-[4px_6px_18px_rgba(0,0,0,0.06)]"
        draggable={false}
      />
    </div>
  );
};

export default HomeRightSide;
