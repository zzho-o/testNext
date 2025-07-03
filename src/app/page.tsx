import HomeLeftSide from "@/components/HomeLeftSide";
import HomeRightSide from "@/components/HomeRightSide";

export default function Home() {
  return (
    <div className="flex mt-[60px] ml-[64px] w-full max-w-[calc(100%-64px)] h-full gap-[12px] px-[40px] pt-[28px]">
      <HomeLeftSide className="flex-[1302] min-w-[300px] " />
      <HomeRightSide className="flex-[463] min-w-[200px]" />
    </div>
  );
}
