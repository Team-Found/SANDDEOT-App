import Tesseract from "tesseract.js";
import { useRef } from "react";

const defaultSrc =
  "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";

import Webcam from "react-webcam";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import React, { useState, createRef } from "react";
import noImageImg from "@assets/img/noImage.svg";

export const Ocr: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);
  const [image, setImage] = useState<string | ArrayBuffer | null>();
  const [deviceId, setDeviceId] = React.useState({});
  const [devices, setDevices] = React.useState([]);

  const [cropData, setCropData] = useState("#");
  const cropperRef = createRef<ReactCropperElement>();

  const handleDevices = React.useCallback(
    (mediaDevices) =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices],
  );

  React.useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]);

  // console.log(devices[0]);

  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    setImage(imageSrc);
  }, [webcamRef]);

  const onChange = (e: any) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as any);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (typeof cropperRef.current?.cropper !== "undefined") {
        const croppedImageData = cropperRef.current?.cropper
          .getCroppedCanvas()
          .toDataURL();
        if (croppedImageData) {
          resolve(croppedImageData);
        } else {
          reject("Failed to get cropped image data.");
        }
      } else {
        reject("Cropper is undefined.");
      }
    });
  };

  const checkImageLoaded = (imageData: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = imageData;
      img.onload = () => resolve();
      img.onerror = () => reject("Image failed to load.");
    });
  };

  const handleClick = (): void => {
    getCropData()
      .then((imageData) => {
        return checkImageLoaded(imageData).then(() => imageData);
      })
      .then((imageData) => {
        return Tesseract.recognize(imageData, "eng+kor", {
          logger: (m) => {
            if (m.status === "recognizing text") {
              const progressValue = (m.progress * 100).toFixed(2);
              setProgress(Number(progressValue));
            }
          },
        });
      })
      .then(({ data: { text } }) => {
        console.log(text);
      })
      .catch((error) => {
        console.error("Error occurred:", error);
      });
  };

  const uploadImg = (): void => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = onChange;
    input.click();
  };
  return (
    <>
      <div className="self-stretch mt-[-0.85px] [font-family:'Pretendard_Variable-Bold',Helvetica] font-bold text-2xl tracking-[0] leading-[normal]">
        OCR
      </div>
      <div className="self-stretch w-full gap-4 flex flex-col">
        <div className="self-stretch w-full rounded-lg relative overflow-clip">
          {/* <Webcam audio={false} width="100%" screenshotFormat="image/jpeg" /> */}
          {image ? (
            <Cropper
              ref={cropperRef}
              style={{ height: 400, width: "100%" }}
              zoomTo={0.5}
              initialAspectRatio={1}
              preview=".img-preview"
              src={image}
              viewMode={1}
              minCropBoxHeight={10}
              minCropBoxWidth={10}
              background={false}
              responsive={true}
              autoCropArea={1}
              checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
              guides={true}
            />
          ) : deviceId == "uploadFile" ? (
            <img src={noImageImg} alt="이미지 업로드" onClick={uploadImg} />
          ) : (
            <Webcam
              audio={false}
              videoConstraints={{
                deviceId: deviceId,
                facingMode: "environment",
                width: 1280,
                height: 720,
              }}
              width="100%"
              screenshotFormat="image/jpeg"
              ref={webcamRef}
            />
          )}
          <div className="absolute bottom-2 right-2">
            {devices.length > 0 ? (
              <Select
                defaultValue={devices[0].deviceId}
                onValueChange={(e) => {
                  if (e === "uploadFile" && !image) {
                    uploadImg();
                  }
                  setDeviceId(e);
                }}
              >
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="카메라 선택" />
                </SelectTrigger>
                <SelectContent>
                  {devices.map((device) => (
                    <SelectItem key={device.deviceId} value={device.deviceId}>
                      {device.label}
                    </SelectItem>
                  ))}
                  <SelectItem value="uploadFile">파일 업로드</SelectItem>
                </SelectContent>
              </Select>
            ) : null}
          </div>
        </div>
        <div className="flex w-full h-14 justify-between">
          {image ? (
            <>
              <button
                className="bg-red-500 text-black px-4 py-2 rounded-full"
                onClick={() => {
                  setImage(null);
                  setProgress(0);
                }}
              >
                Reset
              </button>
              <progress
                value={progress}
                max="100"
                className="w-50 mb-4 h-4 bg-gray-200 rounded-full"
              ></progress>
              <button
                onClick={handleClick}
                className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
              >
                다음
              </button>
            </>
          ) : (
            <button
              className="bg-white text-black px-4 py-2 rounded-full"
              onClick={capture}
            >
              Capture
            </button>
          )}
          {/* <label
            htmlFor="file"
            className="cursor-pointer border-2 rounded-lg p-4"
          >
            파일 업로드
          </label>
          <input id="file" type="file" onChange={onChange} className="w-0 h-0" /> */}
        </div>
      </div>
    </>
  );
};
