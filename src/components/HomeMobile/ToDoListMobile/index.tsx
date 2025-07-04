import Image from "next/image";

const ToDoListMobile = () => {
  return (
    <div className="w-full aspect-[320/460] flex-shrink-0 rounded-[8px] border border-[#EEEEF0] bg-[#FFF] shadow-[4px_6px_18px_0px_rgba(0,0,0,0.06)]">
      <Image
        src="/home_banner_mobile.svg"
        alt="home_banner_mobile"
        width={320}
        height={352}
        className="w-[100%] cursor-pointer"
        draggable={false}
      />
    </div>
  );
};

export default ToDoListMobile;
