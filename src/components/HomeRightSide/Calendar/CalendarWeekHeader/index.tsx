"use client";

import React from "react";

type CalendarWeekHeaderProps = {
  weekDays: string[];
  todayIndex: number;
  selectedIndex: number;
};

const CalendarWeekHeader = ({
  weekDays,
  todayIndex,
  selectedIndex,
}: CalendarWeekHeaderProps) => {
  return (
    <div className="w-full aspect-[461/48] flex-shrink-0 rounded-t-[8px] bg-[#F7F7F7] flex justify-between px-[16px]">
      {weekDays.map((day, i) => {
        const isToday = i === todayIndex;
        const isSelected = i === selectedIndex;

        return (
          <div
            key={i}
            className="relative flex items-center justify-center h-full w-[36px]"
          >
            {isToday && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[calc(100%+6px)] px-[3px] py-[2px] inline-flex justify-center items-center gap-[10px] rounded-[8px] bg-[rgba(6,38,169,0.10)] text-[#0626A9] font-pretendard text-[12px] font-medium leading-[133.4%] tracking-[0.302px]">
                Today
              </div>
            )}

            {/* 요일 텍스트 */}
            <div
              className={`
                font-pretendard text-[16px] leading-[150%] tracking-[0.091px]
                ${
                  isToday && isSelected
                    ? "text-white bg-[#0626A9] font-bold px-[11px] py-[3px] rounded-[8px]"
                    : isSelected
                      ? "text-white bg-[#0626A9] px-[11px] py-[3px] rounded-[8px]"
                      : isToday
                        ? "text-[#0626A9] font-medium"
                        : "text-[#46474C] font-medium"
                }
              `}
            >
              {day}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CalendarWeekHeader;
