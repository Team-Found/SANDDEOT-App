

# 정보의 바닷속 네비게이션, 산뜻
![표지](https://github.com/user-attachments/assets/0083db08-e314-45c8-b17e-06aca72a1c6f)
> 🤖 AI 추천 RSS로 정보 습득이 쉬워지는 순간!

'산뜻'은 RSS리더와 AI추천 시스템을 결합한 사용자 맞춤 RSS리더입니다.<br />
부가적으로 읽기 보조 기능도 제공하여 바쁜 개발자들도 언제 어디서든 쉽게 최신 정보에 접근할 수 있습니다.

[시연영상](https://nas.obtuse.kr/d/s/zyTBwLjHiqZ5D5AabBs7AUUk0Sj2fFCS/dRHiJesZEpfPsYjLSDKhewbobpU78nCc-s7lAmKaipAs)

## 맞춤형 글 추천
![맞춤형 추천 글 이미지](https://github.com/user-attachments/assets/98da6225-3c91-461e-bb3c-b6b64c3acced)
<p align="center">체류시간이 높은 글과, 사용자가 저장한 글을 임베딩한 후, 유사도가 높은 글을 추천합니다.</p>

## 읽기 도구

### 중요문장 강조
![중요문장 강조 이미지](https://github.com/user-attachments/assets/94c6550a-71e1-45fa-a965-5bb8e4dd84bd)
<p align="center">중요 문장 강조 기능은 다음 두 가설에 기반해 작동합니다. WinkNLP를 사용하여 구현하였습니다.</p>

### AI 요약
OpenAI API를 이용한 글 내용 요약 기능을 제공합니다.

### Q&A
글 내용에 대해 AI에게 질문할 수 있습니다.

## 기타
- OCR : 블로그 글이 아닌 책이나 종이의 글도 카메라로 인식하여 읽기 도구를 사용할 수 있습니다.
- 에디터 : OCR된 글을 수정하거나, 새로운 글을 작성해 읽기 도구를 사용할 수 있습니다.
- AI 글 구조화 : AI가 평문으로 된 글을 H1, H2와 같은 태그들을 사용해 구조화합니다.

## 수상이력
> 🏆 부산소프트웨어마이스터고등학교 2024년도 2회 AI공모전 수상

<p>&nbsp;</p>

# for contribute
이 앱은 Electron-Vite와 React를 사용하여 제작되었습니다. 기여를 위해 아래 내용을 확인해주세요.
## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Install

```bash
$ npm install
```

> 💡 이 앱은 [SANDDEOT-Server](https://github.com/Team-Found/SANDDEOT-Server) 와 함께 작동해야 합니다.
> 서버 측 설정 방법에 대해선 해당 레포지토리를 참고 바랍니다.

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```
