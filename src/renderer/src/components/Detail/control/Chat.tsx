interface ChatProps {
  data: Message;
}

interface Message {
  id: string;
  assistant_id: string | null;
  attachments: any[];
  completed_at: number | null;
  content: MessageContent[];
  created_at: number;
  incomplete_at: number | null;
  incomplete_details: any;
  metadata: Record<string, unknown>;
  object: string;
  role: string;
  run_id: string | null;
  status: string | null;
  thread_id: string;
}

interface MessageContent {
  text: TextContent;
  type: string;
}

interface TextContent {
  annotations: any[];
  value: string;
}

export default function Chat({ data }: ChatProps) {
  const extract = (input: string, categorize: number): string | null => {
    const regex =
      categorize === 1
        ? /\\?"question"\\?\s*:\s*\\?"([^"]*)\\?"/
        : categorize === 0
          ? /\\?"answer"\\?\s*:\s*\\?"([^"]*)\\?"/
          : null;

    const match = regex ? input.match(regex) : null;

    if (match) {
      // 유니코드 문자열을 텍스트로 변환
      try {
        const parsedText = JSON.parse(`"${match[1]}"`);
        console.log(parsedText);
        return parsedText;
      } catch (error) {
        console.error("유니코드 변환 오류:", error);
        return match[1];
      }
    }

    return null;
  };

  // Helper function to categorize the message type
  function categorizeMessage(value: string): number {
    if (value.includes('"question"')) {
      return 1; // Question
    } else if (value.includes('"answer"')) {
      return 0; // Answer
    } else {
      return 3; // Other types
    }
  }

  const kind = categorizeMessage(data.content[0].text.value);

  // If the kind is 'other', do not render the component
  if (kind === 3) {
    return null;
  }

  return (
    <div
      className={`pl-1 justify-start items-start gap-1 inline-flex ${
        kind === 1 ? "text-[#A394A5]" : kind === 0 ? "text-[#766977]" : null
      }`}
    >
      <div className="text-toolSecondary text-sm font-extrabold leading-7">
        {kind === 1 ? "Q" : kind === 0 ? "A" : "Other"}.
      </div>
      <div className="grow shrink basis-0 pl-1 pr-1.5 py-1.5 rounded shadow-inner justify-center items-center gap-2.5 flex">
        <div className="grow shrink basis-0 self-stretch text-toolSecondary text-sm font-normal leading-none">
          {extract(data.content[0].text.value, kind)}
        </div>
      </div>
    </div>
  );
}
