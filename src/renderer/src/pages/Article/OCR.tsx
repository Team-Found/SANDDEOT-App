export const Ocr = (): JSX.Element => {
  return (
    <>
      <div className="self-stretch mt-[-0.85px] [font-family:'Pretendard_Variable-Bold',Helvetica] font-bold text-2xl tracking-[0] leading-[normal]">
        OCR
      </div>
      <div className="self-stretch w-full h-96 rounded-lg bg-[url(/frame-56.png)] bg-cover bg-[50%_50%]" />
      <div className="flex items-start justify-between  self-stretch w-full flex-[0_0_auto]">
        <div className=" w-[195px] h-px" />
        <div className="flex w-[50px] h-[50px] items-center justify-center gap-2.5 px-3.5 py-[11px]  bg-white rounded-full overflow-hidden">
          <img
            className="w-6 h-6 ml-[-1.00px] mr-[-1.00px]"
            alt="Center focus weak"
            src="center-focus-weak.png"
          />
        </div>
        <div className="flex flex-col w-[195px] items-start ">
          <div className="#1b1918">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Pretendard_Variable-Regular',Helvetica] font-normal text-xs tracking-[0] leading-[normal] whitespace-nowrap">
              FaceTime HD Camera
            </div>
            <img
              className="relative w-[12.14px] h-[6.69px]"
              alt="Arrow back ios"
              src="arrow-back-ios.svg"
            />
          </div>
          <div className="flex flex-col items-start gap-[15px] p-2.5 self-stretch w-full flex-[0_0_auto] bg-variable-collection-secondarybg rounded-[10px] overflow-hidden">
            <div className="#5d5450">홍길동 iPhone Camera</div>
            <p className="#5d5450">홍길동 iPhone Desk View Camera</p>
            <div className="#5d5450">홍길동 iPad Camera</div>
            <div className="#5d5450">OBS Virtual Camera</div>
          </div>
        </div>
      </div>
    </>
  );
};
