import { useState } from "react";
import { Label } from "@/components/ui/label";

export default function FileUploadBtn(): JSX.Element {
  const [textImage, setTextImage] = useState<File | null>(null);
  const [binaryData, setBinaryData] = useState<Uint8Array | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setTextImage(file);

      const reader = new FileReader();

      reader.onload = (event) => {
        if (event.target?.result) {
          const arrayBuffer = event.target.result as ArrayBuffer;
          const uint8Array = new Uint8Array(arrayBuffer);
          const binaryString = Array.from(uint8Array)
            .map((byte) => byte.toString(2).padStart(8, "0"))
            .join("");

          // binaryString 이진수로 나와요~
          console.log("Binary String:", binaryString);

          // 상태에 이진 데이터 저장
          setBinaryData(uint8Array);
        }
      };

      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <>
      <Label
        htmlFor="picture"
        className="rounded-md border-solid border border-[0 0% 14.9%]; pt-2 flex w-[300px] h-[30px] justify-center"
      >
        썸네일을 업로드 하세요.
      </Label>
      <input id="picture" type="file" onChange={handleFileChange} />
    </>
  );
}
