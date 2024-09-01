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

export default ApiResponse;
