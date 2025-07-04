import { Button } from "@/components/ui/button";
import Image from "next/image";
type TodoItem = {
  id: number;
  title: string;
  date?: string;
  completed: boolean;
};

const todoList: TodoItem[] = [
  {
    id: 1,
    title: "치과 예약",
    completed: true,
  },
  {
    id: 2,
    title: "요가 30분",
    date: "2025-07-02",
    completed: true,
  },
  {
    id: 3,
    title: "빵 구입",
    completed: false,
  },
  {
    id: 4,
    title: "MLS 리스팅 업데이트",
    completed: false,
  },
  {
    id: 5,
    title: "유튜브에 영상 게시하기",
    completed: true,
  },
  {
    id: 6,
    title: "축제 준비",
    date: "2025-07-02",
    completed: true,
  },
];

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
      <div className="mt-[25px]" />
      <div className="flex flex-col gap-[18px]">
        {todoList.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center w-full gap-[9px] border-b border-b-[#DBDCDF] pb-[18px]"
          >
            <Image
              src="/todo_unchecked.svg"
              alt="unchecked"
              width={26}
              height={26}
              className="w-[26px] h-[26px]"
              draggable={false}
            />
            <div className="text-[#171719] font-pretendard text-[16px] font-medium leading-[150%] tracking-[0.091px]">
              <span>{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
