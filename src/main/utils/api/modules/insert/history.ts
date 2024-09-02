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

export default async function history(threadID: string): Promise<ApiResponse> {
  console.log(threadID);

  try {
    const response = await axios.get<ApiResponse>(
      `${apiServer}/ai/getMessageHistory/`,
      {
        params: { threadID: threadID }, // 쿼리 파라미터로 threadID 전달
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    console.log("성공!", response.data);
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
