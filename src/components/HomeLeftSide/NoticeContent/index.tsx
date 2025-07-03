import Image from "next/image";

type ContentType = {
  title: string;
  tag: string;
  author: string;
  date: string;
  view: number;
};
const NoticeContent = ({ title, tag, author, date, view }: ContentType) => {
  return (
    <div>
      <div className="text-[#292A2D] font-pretendard text-[16px] font-medium leading-[162.5%] tracking-[0.091px] h-full ">
        <span>{title}</span>
      </div>
      <div className="flex mt-[7px] h-full">
        <div className="flex items-center justify-center px-[8px] py-[2px] gap-[10px] border border-[#E3E9F2] text-[#0626A9] font-pretendard text-[12px] font-medium leading-[133.4%] tracking-[0.302px]">
          {tag}
        </div>
        <div className="mr-[10px]" />
        <div className=" flex itmes-center text-[#8A8A8A] h-[22px] font-pretendard text-[14px] font-normal leading-[157.1%] tracking-[0.203px] ">
          <span>{author}</span>
          <span className="mx-[8px]">·</span>
          <span>{date}</span>
          <span className="mx-[8px]">·</span>
          <div className="flex items-center">
            <Image
              src="/eye.svg"
              alt="eye"
              width={18}
              height={18}
              className="w-[18px] h-[18px] flex items-center justify-center"
              draggable={false}
            />
          </div>
          <span className="mx-[8px]">·</span>
          <span>{view}</span>
        </div>
      </div>
    </div>
  );
};

export default NoticeContent;
