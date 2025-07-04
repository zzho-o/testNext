import Image from "next/image";

type ContentType = {
  title: string;
  tag: string;
  author: string;
  date: string;
  view: number;
};
const NoticeContentMobile = ({
  title,
  tag,
  author,
  date,
  view,
}: ContentType) => {
  return (
    <div className="flex flex-col w-full px-[16px] pt-[16px] pb-[20px] justify-center items-start rounded-[8px] border border-[#EEEEF0] bg-[#FFF] shadow-[4px_6px_18px_rgba(0,0,0,0.06)]">
      <div className="overflow-hidden text-ellipsis whitespace-nowrap text-[#292A2D] font-pretendard text-[16px] font-medium leading-[162.5%] tracking-[0.091px]">
        <span>{title}</span>
      </div>

      <div className="flex mt-[4px] ">
        <div className="flex px-[8px] py-[2px] justify-center items-center gap-[10px] border border-[#E3E9F2] text-[#0626A9] text-[12px] font-medium leading-[133.4%] tracking-[0.302px]">
          {tag}
        </div>
        <div className="mr-[8px]" />
        <div className="overflow-hidden flex items-center text-ellipsis text-[#8A8A8A] text-[12px] font-medium leading-[133.4%] tracking-[0.302px]">
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

export default NoticeContentMobile;
