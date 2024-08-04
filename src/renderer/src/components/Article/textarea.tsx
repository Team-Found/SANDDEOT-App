import React, { useRef, useEffect } from 'react';

interface TextareaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void; // 추가: 전송 함수
}

const Textarea: React.FC<TextareaProps> = ({ value, onChange, onSubmit }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto'; // 높이를 초기화하여 scrollHeight를 정확히 계산할 수 있도록 함
      textarea.style.height = `${textarea.scrollHeight}px`; // 콘텐츠의 높이에 맞게 조정
    }
  }, [value]); // 값이 변경될 때마다 높이를 조정

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // 기본 엔터 동작을 방지
      alert(`전송된 내용: ${text}`);
    }
  };

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={onChange}
      onKeyDown={handleKeyDown} // 키보드 이벤트 핸들러 추가
      className="w-full p-2 border rounded resize-none overflow-hidden bg-background text-sm px-2 py-2 placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
    />
  );
};

export default Textarea;
