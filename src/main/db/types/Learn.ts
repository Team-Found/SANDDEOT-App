export interface LearnAnalytics {
  date: Date; // 학습 날짜
  learnID: number[]; // 학습한 학습 ID
  duration: number; // 해당 일의 총 학습 시간
  edit: LeanEdit[]; // 해당 일의 수정사항 리스트
}

export interface LeanEdit {
  editID: number; // 수정 ID
  learnID: number; // 학습 ID
  bodyID: number; // 수정한 본문 ID
  editLineNum: number; // 수정한 라인 번호
  original: string; // 수정 전 내용
  translated: string; // 수정 후 내용
}

export interface Learn {
  learnID: number; // 학습 ID
  startDate: number; // 학습 시작 시간 unix timestamp
  endDate: number; // 학습 종료 시간 unix timestamp
  bodyID: number; // 학습한 본문 ID
}

export interface LearnAddEdit {
  lineNum: number;
  newTranslated: string;
  original: string;
}
