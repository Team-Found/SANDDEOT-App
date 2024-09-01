import axios from "axios"; // axios로 교체
import { apiServer } from "../../api";

interface TextContent {
  annotations: any[]; // 구체적인 구조를 알고 있다면 더 명확하게 정의할 수 있습니다.
  value: string;
}

interface MessageContent {
  text: TextContent;
  type: string;
}

interface Message {
  id: string;
  assistant_id: string | null;
  attachments: any[]; // 구체적인 구조를 알고 있다면 더 명확하게 정의할 수 있습니다.
  completed_at: number | null;
  content: MessageContent[];
  created_at: number;
  incomplete_at: number | null;
  incomplete_details: any; // 구체적인 구조를 알고 있다면 더 명확하게 정의할 수 있습니다.
  metadata: Record<string, unknown>;
  object: string;
  role: string;
  run_id: string | null;
  status: string | null;
  thread_id: string;
}

interface Messages {
  data: Message[];
  object: string;
  first_id: string;
  last_id: string;
  has_more: boolean;
}

interface ApiResponse {
  messages: Messages;
}

export default async function sendQ(
  assistantID: string,
  threadID: string | null,
  article: string,
  question: string,
  selection: string | null,
): Promise<ApiResponse> {
  const json = {
    assistantID: assistantID,
    threadID: threadID,
    article: article,
    question: question,
    selection: selection,
  };
  console.log(JSON.stringify(json));
  console.log(json);

  try {
    const response = await axios.post<ApiResponse>(
      `${apiServer}/ai/startTalk/`,
      json, // axios에서는 자동으로 JSON으로 변환됨
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error("실패1:", error);
    return {
      messages: {
        data: [
          {
            id: "error",
            assistant_id: null,
            attachments: [],
            completed_at: null,
            content: [
              { text: { annotations: [], value: "Error" }, type: "text" },
            ],
            created_at: Date.now(),
            incomplete_at: null,
            incomplete_details: null,
            metadata: {},
            object: "error",
            role: "system",
            run_id: null,
            status: null,
            thread_id: threadID || "unknown",
          },
        ],
        object: "list",
        first_id: "error",
        last_id: "error",
        has_more: false,
      },
    };
  }
}

// sendQ(
//   "asst_Kgk5NI2uhQhaJVUyyCJdyIVe",
//   null,
//   "어느 한 남성이 잠을 자던 중 일어나 물을 마시고 돌아온다.",
//   "그 중 가능성이 높은게 뭘까?",
//   null,
// ).then((item) => {
//   console.log(JSON.parse(item.messages.data[0].content[0].text.value));
// });
