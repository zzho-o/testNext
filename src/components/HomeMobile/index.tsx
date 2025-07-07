import Image from "next/image";
import CalendarMobile from "./CalendarMobile";
import NoticeMobile from "./NoticeMobile";
import ToDoListMobile from "./ToDoListMobile";
import PersonalGroupMobile from "./PersonalGroupMobile";
import MeetingHubMobile from "./MeetingHubMobile";
import WebinarMobile from "./WebinarMobile";

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
      <div className="mt-[56px]" />
      <PersonalGroupMobile />
      <div className="mt-[56px]" />
      <MeetingHubMobile />
      <div className="mt-[56px]" />
      <WebinarMobile />
    </div>
  );
};

export default HomeMobile;
