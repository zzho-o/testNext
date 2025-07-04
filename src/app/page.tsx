import HomeLeftSide from "@/components/HomeLeftSide";
import HomeMobile from "@/components/HomeMobile";
import HomeRightSide from "@/components/HomeRightSide";

export default function Home() {
  return (
    <div className="flex mt-[60px] lg:ml-[64px] w-full lg:max-w-[calc(100%-64px)] h-full gap-[12px] px-[20px] pt-[20px] lg:px-[40px] lg:pt-[28px]">
      <HomeLeftSide className="flex-[1302] min-w-[300px] hidden lg:block" />
      <HomeRightSide className="flex-[463] min-w-[200px] hidden lg:block" />
      <HomeMobile className="flex flex-col w-full lg:hidden " />
    </div>
  );
}
