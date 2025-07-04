import Image from "next/image";
import CalendarMobile from "./CalendarMobile";
import NoticeMobile from "./NoticeMobile";
import ToDoListMobile from "./ToDoListMobile";

const HomeMobile = ({ className = "" }: { className?: string }) => {
  return (
    <div className={className}>
      <Image
        src="/home_banner_mobile.svg"
        alt="home_banner_mobile"
        width={320}
        height={352}
        className="w-[100%] cursor-pointer"
        draggable={false}
      />
      <div className="mt-[57px]" />
      <NoticeMobile />
      <CalendarMobile />
      <div className="mt-[56px]" />
      <ToDoListMobile />
    </div>
  );
};

export default HomeMobile;
