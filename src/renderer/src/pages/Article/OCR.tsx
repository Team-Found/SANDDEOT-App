import React, { useState } from "react";
import Tesseract from "tesseract.js";
export const Ocr: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    if (!image) {
      console.error("No image selected!");
      return;
    }

    Tesseract.recognize(image as string, "eng+kor", {
      logger: (m) => {
        if (m.status === "recognizing text") {
          const progressValue = (m.progress * 100).toFixed(2);
          setProgress(Number(progressValue));
        }
      },
    }).then(({ data: { text } }) => {
      console.log(text);
    });
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen p-4">
        <h1 className="text-2xl font-bold mb-4">OCR with Tesseract.js</h1>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4"
        />
        {image && (
          <img
            src={image as string}
            alt="Selected"
            className="max-w-full max-h-64 mb-4 border border-gray-300"
          />
        )}
        <progress
          value={progress}
          max="100"
          className="w-full mb-4 h-4 bg-gray-200 rounded-full"
        ></progress>
        <button
          onClick={handleClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          텍스트 인식 시작
        </button>
      </div>
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
