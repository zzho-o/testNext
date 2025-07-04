// type ScheduleItem = {
//   id: number;
//   date: string; // '2025-07-02'
//   type: "weekly learning" | "exam" | "event";
//   title: string;
//   location: string;
//   time: string;
//   missingAssignments?: number;
// };
// const schedules: ScheduleItem[] = [
//   {
//     id: 1,
//     date: "2025-06-23",
//     type: "weekly learning",
//     title: "MGT 101 - organization manufactoring",
//     location: "Room 101",
//     time: "9:10 AM - 10:30 AM",
//     missingAssignments: 2,
//   },
// ];
const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const dates = [19, 20, 21, 22, 23, 24, 25];
const selectedIndex = 4;

const Calendar = () => {
  return (
    <div className="rounded-[8px] border border-[#EEEEF0] bg-white shadow-[4px_6px_18px_0px_rgba(0,0,0,0.06)] w-full p-[24px] aspect-[462/615]">
      <div className="text-[#0F0F10] font-pretendard text-[20px] font-medium leading-[140%] tracking-[-0.24px] flex items-center">
        <span>WEEK</span>
        <div className="ml-[6px] text-[#0626A9] text-[24px] font-medium leading-[133.4%] tracking-[-0.552px]">
          4
        </div>
        <div className="mx-[14px]">JUN</div>
        <span>2025</span>
      </div>

      <div className="mt-[20px] flex flex-col">
        <div className="flex justify-between">
          {weekDays.map((day, i) => (
            <div
              key={i}
              className="w-[36px] text-center text-[#0F0F10] font-pretendard text-[14px] font-medium"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-[8px]">
          {dates.map((date, i) => (
            <div
              key={date}
              className={`w-[36px] h-[36px] text-center rounded-[6px] font-pretendard text-[14px] font-medium flex items-center justify-center ${
                i === selectedIndex
                  ? "bg-[#0626A9] text-white"
                  : "text-[#5A5C63]"
              }`}
            >
              {date}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
