import { Button } from "@/components/ui/button";
import Image from "next/image";

const ToDoList = () => {
  return (
    <div className="rounded-[8px] w-full aspect-[462/520] border border-[#EEEEF0] bg-white shadow-[4px_6px_18px_0px_rgba(0,0,0,0.06)] p-[24px]">
      <div className="flex items-center text-[#0F0F10] font-pretendard text-[22px] font-semibold leading-[136.4%] tracking-[-0.427px]">
        <Image
          src="/todo_home.svg"
          alt="todo"
          width={22}
          height={22}
          className="w-[22px] h-[22px]"
          draggable={false}
        />
        <div className="ml-[8px]" />
        <span>To - Do list</span>
        <div className="ml-[20px]" />
        <Button className="inline-flex px-[16px] py-[5px] flex-col items-start gap-[10px] rounded-[8px] bg-[rgba(6,38,169,0.10)] text-[#0626A9] font-pretendard text-[14px] font-medium leading-[157.1%] tracking-[0.203px]">
          <span>Create</span>
        </Button>
      </div>
    </div>
  );
};

export default ToDoList;
