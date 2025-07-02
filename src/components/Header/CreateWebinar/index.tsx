import { CommonModal } from "@/components/CommonModal";
import { useModalStore } from "@/stores/useStore";

const CreateWebinar = () => {
  const { isOpen, closeModal } = useModalStore();
  return (
    <>
      <CommonModal title="Webinar 생성" open={isOpen} onOpenChange={closeModal}>
        <div className="h-full relative">
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
                  placeholder="썸네일 이미지 첨부"
                  className="w-[70%] px-[14px] py-[8px] rounded-[8px] border border-[#DBDCDF] bg-white text-[13px] font-normal leading-[1.385] tracking-[0.252px] text-[#46474C5C] placeholder:text-[#46474C5C] font-pretendard"
                />
                <button className="flex flex-col justify-center items-center px-[20px] py-[9px] flex-1 rounded-[8px] bg-[#0C2CA7] text-white text-[15px] font-semibold leading-[1.467] tracking-[0.144px] font-pretendard text-center">
                  업로드
                </button>
              </div>

              <button className="absolute bottom-0 flex flex-col w-full justify-center items-center self-stretch px-[20px] py-[9px] rounded-[8px] bg-[#0C2CA7]">
                <div className="text-white text-center font-pretendard text-[15px] font-semibold leading-[146.7%] tracking-[0.144px]">
                  <span>생성</span>
                </div>
              </button>
            </div>

            <div className="mt-[16px]">
              <div className="text-[rgba(70,71,76,0.68)] font-pretendard text-[12px] font-medium leading-[133.4%] tracking-[0.302px]">
                <span>제목</span>
              </div>
              <div className="mt-[4px]" />
              <div className="flex w-full">
                <input
                  type="text"
                  placeholder="썸네일 이미지 첨부"
                  className="w-full px-[14px] py-[8px] rounded-[8px] border border-[#DBDCDF] bg-white text-[13px] font-normal leading-[1.385] tracking-[0.252px] text-[#46474C5C] placeholder:text-[#46474C5C] font-pretendard"
                />
              </div>

              <button className="absolute bottom-0 flex flex-col w-full justify-center items-center self-stretch px-[20px] py-[9px] rounded-[8px] bg-[#0C2CA7]">
                <div className="text-white text-center font-pretendard text-[15px] font-semibold leading-[146.7%] tracking-[0.144px]">
                  <span>생성</span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </CommonModal>
    </>
  );
};

export default CreateWebinar;
