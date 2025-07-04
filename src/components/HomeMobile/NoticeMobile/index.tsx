"use client";
import Image from "next/image";
import NoticeContentMobile from "../NoticeContentMobile";
import useEmblaCarousel from "embla-carousel-react";

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
const NoticeMobile = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false });
  return (
    <>
      <div className="flex w-full items-center justify-between">
        <div className="flex w-full items-center">
          <Image
            src="/notice_icon.svg"
            alt="notice_icon"
            width={22}
            height={22}
            className="w-[22px] h-[22px]"
            draggable={false}
          />
          <div className="text-[#0F0F10] font-pretendard text-[22px] font-bold leading-[136.4%] tracking-[-0.427px] ml-[8px]">
            <span>공지사항</span>
          </div>
        </div>
        <div className="flex gap-[8px]">
          <div className="flex cursor-pointer w-[32px] h-[32px] justify-center items-center border border-[#DBDCDF]">
            <Image
              src="/arrow_left.svg"
              alt="arrow_left"
              width={10}
              height={20}
              className="w-[10px] h-[20px]"
              draggable={false}
            />
          </div>
          <div className="flex cursor-pointer w-[32px] h-[32px] justify-center items-center border border-[#DBDCDF]">
            <Image
              src="/arrow_right.svg"
              alt="arrow_right"
              width={10}
              height={20}
              className="w-[10px] h-[20px]"
              draggable={false}
            />
          </div>
        </div>
      </div>
      <div className="mt-[20px]" />
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-[8px]">
          {notices
            .map((item, idx) => (
              <div
                key={idx}
                className="min-w-full flex flex-col gap-[8px] pb-[56px]"
              >
                {notices.slice(idx * 3, idx * 3 + 3).map((notice, i) => (
                  <NoticeContentMobile
                    key={i}
                    title={notice.title}
                    tag={notice.tag}
                    author={notice.author}
                    date={notice.date}
                    view={notice.view}
                  />
                ))}
              </div>
            ))
            .filter((_, i) => i % 3 === 0)}
        </div>
      </div>
    </>
  );
};

export default NoticeMobile;
