import Image from "next/image";
import NoticeContent from "./NoticeContent";
import PersonalGroup from "./PersonalGroup";
import MeetingHub from "./MeetingHub";
import Webinars from "./Webinars";
const notices = [
  {
    title: "2025학년도 1학기 및 여름계절학기 학기종료에 따른 수강생 문의 안내",
    tag: "HIC",
    author: "한양인터칼리지",
    date: "2025-07-02",
    view: 125,
  },
  {
    title: "2025학년도 1학기 교강사/재학생 안내 자료 배포",
    tag: "공지사항",
    author: "한양인터칼리지",
    date: "2025-07-02",
    view: 125,
  },
  {
    title: "한양인터칼리지 LXP 서비스 일시 중단 안내 (2020.05.27. 18:00~21:30)",
    tag: "HIC",
    author: "한양인터칼리지",
    date: "2025-07-02",
    view: 125,
  },
  {
    title: "2025학년도 1학기 LMS 과목 접근 안내",
    tag: "공지사항",
    author: "한양인터칼리지",
    date: "2025-07-01",
    view: 98,
  },
  {
    title: "교강사용 강의 계획서 입력 안내",
    tag: "HIC",
    author: "한양인터칼리지",
    date: "2025-06-29",
    view: 154,
  },
  {
    title: "수강 신청 변경 기간 공지",
    tag: "공지사항",
    author: "한양인터칼리지",
    date: "2025-06-28",
    view: 210,
  },
  {
    title: "2025학년도 1학기 LMS 과목 접근 안내",
    tag: "공지사항",
    author: "한양인터칼리지",
    date: "2025-07-01",
    view: 98,
  },
  {
    title: "교강사용 강의 계획서 입력 안내",
    tag: "HIC",
    author: "한양인터칼리지",
    date: "2025-06-29",
    view: 154,
  },
  {
    title: "수강 신청 변경 기간 공지",
    tag: "공지사항",
    author: "한양인터칼리지",
    date: "2025-06-28",
    view: 210,
  },
  {
    title: "2025학년도 1학기 LMS 과목 접근 안내",
    tag: "공지사항",
    author: "한양인터칼리지",
    date: "2025-07-01",
    view: 98,
  },
  {
    title: "교강사용 강의 계획서 입력 안내",
    tag: "HIC",
    author: "한양인터칼리지",
    date: "2025-06-29",
    view: 154,
  },
  {
    title: "수강 신청 변경 기간 공지",
    tag: "공지사항",
    author: "한양인터칼리지",
    date: "2025-06-28",
    view: 210,
  },
];

const HomeLeftSide = ({ className = "" }: { className?: string }) => {
  return (
    <div className={className}>
      <div className="flex gap-[12px]">
        <Image
          src="/home_banner.svg"
          alt="home_banner"
          width={633}
          height={360}
          className="flex-50 w-[50%] cursor-pointer"
          draggable={false}
        />
        <div className="flex-50 w-[50%] aspect-[1.825] flex flex-col px-[24px] py-[28px] flex-shrink-0 rounded-[8px] border border-[#EEEFF0] bg-white shadow-[4px_6px_18px_rgba(0,0,0,0.06)]">
          {/* 상단 영역: shrink 고정 */}
          <div className="flex justify-between items-center flex-shrink-0">
            <div className="flex items-center gap-[8px]">
              <Image
                src="/notice_icon.svg"
                alt="notice_icon"
                width={22}
                height={22}
                className="w-[22px] h-[22px]"
                draggable={false}
              />
              <div className="text-[#0F0F10] font-pretendard text-[22px] font-semibold leading-[136.4%] tracking-[-0.427px]">
                <span>공지사항</span>
              </div>
            </div>
            <div className="flex items-center gap-[6px] text-[#0626A9] font-pretendard text-[14px] font-medium leading-[157.1%] tracking-[0.203px] underline cursor-pointer">
              <span>MORE</span>
              <Image
                src="/more_plus.svg"
                alt="more_plus"
                width={8}
                height={8}
                className="w-[8px] h-[8px]"
                draggable={false}
              />
            </div>
          </div>
          {/* notices 영역 */}
          <div className="mt-[24px] flex-1 overflow-y-auto min-h-0">
            {notices.map((item, idx) => (
              <NoticeContent
                key={idx}
                title={item.title}
                tag={item.tag}
                author={item.author}
                date={item.date}
                view={item.view}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-[40px]" />
      <PersonalGroup />
      <div className="mt-[40px]" />
      <MeetingHub />
      <div className="mt-[40px]" />
      <Webinars />
    </div>
  );
};

export default HomeLeftSide;
