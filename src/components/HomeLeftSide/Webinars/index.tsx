import Image from "next/image";

type TWebinarCard = {
  title: string;
  course: string;
  professor: string;
  date: string;
  time: string;
  type: "Live" | "VOD";
  imageUrl: string;
};
const webinarCards: TWebinarCard[] = [
  {
    title: "Generative AI for everyone",
    course: "Design-0001",
    professor: "Peter parker",
    date: "2025-07-02",
    time: "9:10 AM - 10:30 AM",
    type: "Live",
    imageUrl: "/webinarCardDummy.png",
  },
  {
    title: "Design Management",
    course: "Design-0001",
    professor: "Peter parker",
    date: "2025-07-02",
    time: "9:10 AM - 10:30 AM",
    type: "VOD",
    imageUrl: "/webinarCardDummy.png",
  },
  {
    title: "Focus Group Interview",
    course: "Design-0001",
    professor: "Peter parker",
    date: "2025-07-02",
    time: "9:10 AM - 10:30 AM",
    type: "Live",
    imageUrl: "/webinarCardDummy.png",
  },
  {
    title: "Checking Assignment on September",
    course: "Design-0001",
    professor: "Peter parker",
    date: "2025-07-02",
    time: "9:10 AM - 10:30 AM",
    type: "VOD",
    imageUrl: "/webinarCardDummy.png",
  },
];

const Webinars = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center text-[#0F0F10] font-pretendard text-[22px] font-semibold leading-[136.4%] tracking-[-0.427px]">
          <Image
            src="/webinar_home.svg"
            alt="webinar_home"
            width={22}
            height={22}
            className="w-[22px] h-[22px]"
            draggable={false}
          />
          <div className="ml-[8px]" />
          <span>Webinars</span>
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
      <div className="mt-[20px]" />
      <div className="flex gap-[16px]">
        {webinarCards.map((item, idx) => (
          <div key={idx} className="w-[264px] rounded-[10px] overflow-hidden">
            {/* 카드 상단 (이미지 + 타입 뱃지) */}
            <div
              className="h-[178px] w-full rounded-t-[10px] bg-cover bg-center bg-no-repeat relative"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <span
                className={`absolute top-[12px] left-[12px] px-[8px] py-[2px] text-[12px] font-semibold rounded-[6px] text-white ${
                  item.type === "Live" ? "bg-[#F04438]" : "bg-[#6E7C87]"
                }`}
              >
                {item.type}
              </span>
            </div>

            {/* 카드 하단 */}
            <div className="flex flex-col gap-[10px] p-[16px] h-[124px] rounded-b-[8px] border border-[#EEEEF0] bg-white shadow-[4px_6px_18px_rgba(0,0,0,0.06)]">
              <div className="text-[#0F0F10] text-[15px] font-semibold leading-tight">
                {item.title}
              </div>
              <div className="text-[13px] text-[#5A5C63] font-pretendard">
                {item.course} | Professor {item.professor}
              </div>
              <div className="text-[12px] text-[#5A5C63] flex gap-1 items-center">
                <Image
                  src="/calendar.svg"
                  alt="calendar"
                  width={14}
                  height={14}
                  className="w-[14px] h-[14px]"
                />
                <span>{item.date}</span>
                <span className="ml-[4px]">{item.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Webinars;
