import { CommonModal } from "@/components/CommonModal";
import { useModalStore } from "@/stores/useStore";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const CreateWebinar = () => {
  const { isOpen, closeModal } = useModalStore();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [imgName, setImgName] = useState<string>("");
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImgFile(e.target.files[0]);
      setImgName(e.target.files[0].name);
      console.log(imgFile);
    }
  };
  useEffect(() => {
    if (!isOpen) {
      setImgFile(null);
      setImgName("");
    }
  }, [isOpen]);
  const handleImgUploadClick = () => {
    fileInputRef.current?.click();
  };
  return (
    <>
      <CommonModal title="Webinar 생성" open={isOpen} onOpenChange={closeModal}>
        <div className="h-full max-h-[80vh] overflow-y-auto hide-scrollbar">
          <div className="mt-[16px] " />
          <form>
            <div>
              <div className="text-[rgba(70,71,76,0.68)] font-pretendard text-[12px] font-medium leading-[133.4%] tracking-[0.302px]">
                <span>썸네일 이미지</span>
              </div>
              <div className="mt-[4px]" />
              <div className="flex w-full gap-[8px]">
                <input
                  type="text"
                  readOnly
                  value={imgName}
                  placeholder="썸네일 이미지 첨부"
                  className="w-[70%] px-[14px] py-[8px] h-[40px] rounded-[8px] border border-[#DBDCDF] bg-white text-[13px] font-normal leading-[1.385] tracking-[0.252px] text-[#171719] placeholder:text-[#46474C5C] font-pretendard"
                />
                <div
                  onClick={handleImgUploadClick}
                  className="flex flex-col justify-center h-[40px] items-center cursor-pointer px-[20px] py-[9px] flex-1 rounded-[8px] bg-[#0C2CA7] text-white text-[15px] font-semibold leading-[1.467] tracking-[0.144px] font-pretendard text-center"
                >
                  업로드
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
            </div>

            <div className="mt-[16px]">
              <div className="text-[rgba(70,71,76,0.68)] font-pretendard text-[12px] font-medium leading-[133.4%] tracking-[0.302px]">
                <span>제목</span>
              </div>
              <div className="mt-[4px]" />
              <div className="flex w-full">
                <input
                  type="text"
                  placeholder="제목을 입력해주세요."
                  className="w-full px-[14px] py-[8px] rounded-[8px] border border-[#DBDCDF] bg-white
                    text-[#171719] text-[14px] font-medium leading-[1.429] tracking-[0.203px] font-pretendard
                    placeholder:text-[rgba(70,71,76,0.36)] placeholder:text-[13px] placeholder:font-normal placeholder:leading-[1.385] placeholder:tracking-[0.252px]"
                />
              </div>
            </div>
            <div className="mt-[16px]">
              <div className="text-[rgba(70,71,76,0.68)] font-pretendard text-[12px] font-medium leading-[133.4%] tracking-[0.302px]">
                <span>구분</span>
              </div>
              <div className="mt-[4px]" />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex w-full h-[40px]">
                    <div className="flex justify-between w-full items-center self-stretch p-[8px] pl-[14px] rounded-[8px] border border-[#DBDCDF] bg-white text-[#171719] font-pretendard text-[14px] font-medium leading-[1.429] tracking-[0.203px]">
                      <span>VOD (File)</span>
                      <Image
                        src="/arrow_down.svg"
                        alt="arrow_down"
                        width={24}
                        height={24}
                        className="w-[24px] h-[24px] cursor-pointer"
                        draggable={false}
                      />
                    </div>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-screen left-0 mt-[10px] h-screen border-none shadow-none rounded-none px-[20px] pt-[20px]">
                  <div className="flex  items-center rounded-[10px] bg-[rgba(12,44,167,0.20)] w-full h-[48px]">
                    <Image
                      src={"/settings_mobile.svg"}
                      alt="settings_mobile"
                      width={24}
                      height={24}
                      className="w-[48px] h-[48px]"
                      draggable={false}
                    />
                    <div className="text-[#0C2CA7] text-[16px] font-semibold leading-[1.625] tracking-[0.091px] font-pretendard">
                      <span>Setting</span>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="mt-[16px]">
              <div className="text-[rgba(70,71,76,0.68)] font-pretendard text-[12px] font-medium leading-[133.4%] tracking-[0.302px]">
                <span>일자 및 시간</span>
              </div>
              <div className="mt-[4px]" />
              <div className="flex flex-col gap-[8px] w-full">
                <div className="flex relative">
                  <input
                    type="text"
                    placeholder="시작일을 입력해주세요."
                    className="w-full px-[14px] py-[8px] rounded-[8px] border border-[#DBDCDF] bg-white
                    text-[#171719] text-[14px] font-medium leading-[1.429] tracking-[0.203px] font-pretendard
                    placeholder:text-[rgba(70,71,76,0.36)] placeholder:text-[13px] placeholder:font-normal placeholder:leading-[1.385] placeholder:tracking-[0.252px]"
                  />
                  <Image
                    src={"/input_calendar.svg"}
                    alt="input_calendar"
                    width={24}
                    height={24}
                    className="w-[24px] h-[24px] absolute right-[8px] top-[50%] translate-y-[-50%]"
                    draggable={false}
                  />
                </div>
                <div className="flex relative">
                  <input
                    type="text"
                    placeholder="시작일을 입력해주세요."
                    className="w-full px-[14px] py-[8px] rounded-[8px] border border-[#DBDCDF] bg-white
                    text-[#171719] text-[14px] font-medium leading-[1.429] tracking-[0.203px] font-pretendard
                    placeholder:text-[rgba(70,71,76,0.36)] placeholder:text-[13px] placeholder:font-normal placeholder:leading-[1.385] placeholder:tracking-[0.252px]"
                  />
                  <Image
                    src={"/input_calendar.svg"}
                    alt="input_calendar"
                    width={24}
                    height={24}
                    className="w-[24px] h-[24px] absolute right-[8px] top-[50%] translate-y-[-50%]"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
            <div className="mt-[16px]">
              <div className="text-[rgba(70,71,76,0.68)] font-pretendard text-[12px] font-medium leading-[133.4%] tracking-[0.302px]">
                <span>대상</span>
              </div>
              <div className="mt-[4px]" />
              <div className="flex w-full">
                <input
                  type="text"
                  placeholder="대상을 입력해주세요."
                  className="w-full px-[14px] py-[8px] rounded-[8px] border border-[#DBDCDF] bg-white
                    text-[#171719] text-[14px] font-medium leading-[1.429] tracking-[0.203px] font-pretendard
                    placeholder:text-[rgba(70,71,76,0.36)] placeholder:text-[13px] placeholder:font-normal placeholder:leading-[1.385] placeholder:tracking-[0.252px]"
                />
              </div>
            </div>
            <div className="mt-[16px]">
              <div className="text-[rgba(70,71,76,0.68)] font-pretendard text-[12px] font-medium leading-[133.4%] tracking-[0.302px]">
                <span>내용</span>
              </div>
              <div className="mt-[4px]" />
              <div className="flex w-full">
                <input
                  type="text"
                  placeholder="내용을 입력해주세요."
                  className="w-full px-[14px] py-[8px] rounded-[8px] border border-[#DBDCDF] bg-white
                    text-[#171719] text-[14px] font-medium leading-[1.429] tracking-[0.203px] font-pretendard
                    placeholder:text-[rgba(70,71,76,0.36)] placeholder:text-[13px] placeholder:font-normal placeholder:leading-[1.385] placeholder:tracking-[0.252px]"
                />
              </div>
            </div>
            <div className="mt-[40px]" />
            <button className="fixed h-[40px] bottom-[22px] flex flex-col w-[calc(100%-32px)] justify-center items-center self-stretch px-[20px] py-[9px] rounded-[8px] bg-[#0C2CA7]">
              <div className="text-white text-center font-pretendard text-[15px] font-semibold leading-[146.7%] tracking-[0.144px]">
                <span>참여</span>
              </div>
            </button>
          </form>
        </div>
      </CommonModal>
    </>
  );
};

export default CreateWebinar;
