import { useState, useEffect, useRef } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Link as Link2 } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTitle, setBody, RootState } from "../../utils/store";
import axios from "axios";

import {
  BalloonEditor,
  AccessibilityHelp,
  Alignment,
  Autoformat,
  AutoImage,
  AutoLink,
  Autosave,
  Base64UploadAdapter,
  BlockQuote,
  BlockToolbar,
  Bold,
  Code,
  CodeBlock,
  Essentials,
  FindAndReplace,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  GeneralHtmlSupport,
  Heading,
  Highlight,
  HorizontalLine,
  HtmlComment,
  HtmlEmbed,
  ImageBlock,
  ImageCaption,
  ImageInline,
  ImageInsert,
  ImageInsertViaUrl,
  ImageResize,
  ImageStyle,
  ImageTextAlternative,
  ImageToolbar,
  ImageUpload,
  Indent,
  IndentBlock,
  Italic,
  Link,
  LinkImage,
  List,
  ListProperties,
  //Markdown,
  MediaEmbed,
  PageBreak,
  Paragraph,
  PasteFromMarkdownExperimental,
  PasteFromOffice,
  RemoveFormat,
  SelectAll,
  ShowBlocks,
  SpecialCharacters,
  SpecialCharactersArrows,
  SpecialCharactersCurrency,
  SpecialCharactersEssentials,
  SpecialCharactersLatin,
  SpecialCharactersMathematical,
  SpecialCharactersText,
  Strikethrough,
  Style,
  Subscript,
  Superscript,
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  TextPartLanguage,
  TextTransformation,
  Title,
  TodoList,
  Underline,
  Undo,
} from "ckeditor5";

import { Button } from "@/components/ui/button";

function ButtonDemo(): JSX.Element {
  const dispatch = useDispatch();
  const title = useSelector((state: RootState) => state.textData.title);
  const body = useSelector((state: RootState) => state.textData.body);
  return (
    <Button
      className="px-8"
      onClick={() => {
        window.dbApi.article.addUserArticle(title, new Date(), body);
        dispatch(setBody(""));
        dispatch(setTitle(""));
      }}
    >
      등록
    </Button>
  );
}

// import translations from "ckeditor5/translations/ko.js";
import "ckeditor5/ckeditor5.css";

import "./ckeditor.css";

export default function Input(): JSX.Element {
  const dispatch = useDispatch();
  const title = useSelector((state: RootState) => state.textData.title);
  const body = useSelector((state: RootState) => state.textData.body);
  const editorRef = useRef<BalloonEditor | null>(null); // CKEditor 인스턴스를 저장할 ref

  const editorContainerRef = useRef<HTMLDivElement | null>(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);

  const [isEditorReady, setIsEditorReady] = useState(false); // CKEditor가 준비되었는지 확인

  const editorWrapperRef = useRef<HTMLDivElement>(null); // 새로운 ref 추가

  const handleButtonClick = async (): Promise<void> => {
    console.log("함수 진입 성공");
    try {
      console.log(body);
      const requestData = {
        content: `${body}`,
      };

      const response = await axios.post(
        "https://sanddoet.obtuse.kr/ai/markdownFormat",
        requestData,
      );

      const responseData = response.data;
      if (
        responseData &&
        responseData.messages &&
        responseData.messages.content
      ) {
        console.log(response);
        const content = responseData.messages.content;
        console.log(content);
        dispatch(setBody(content));

        // CKEditor 인스턴스가 준비되었는지 확인 후 데이터 설정
        if (isEditorReady && editorRef.current) {
          console.log("초기화");
          editorRef.current.setData(content);
        }
      }
    } catch (error) {
      console.error("POST 요청 중 오류 발생:", error);
    }
  };

  useEffect((): (() => void) => {
    setIsLayoutReady(true);
    return () => setIsLayoutReady(false);
  }, []);

  const editorConfig: {
    toolbar: {
      items: string[];
      shouldNotGroupWhenFull: boolean;
    };
    plugins: (
      | typeof AccessibilityHelp
      | typeof Alignment
      | typeof Autoformat
      | typeof AutoImage
      | typeof AutoLink
      | typeof Autosave
      | typeof Base64UploadAdapter
      | typeof BlockQuote
      | typeof BlockToolbar
      | typeof Bold
      | typeof Code
      | typeof CodeBlock
      | typeof Essentials
      | typeof FindAndReplace
      | typeof FontBackgroundColor
      | typeof FontColor
      | typeof FontFamily
      | typeof FontSize
      | typeof GeneralHtmlSupport
      | typeof Heading
      | typeof Highlight
      | typeof HorizontalLine
      | typeof HtmlComment
      | typeof HtmlEmbed
      | typeof ImageBlock
      | typeof ImageCaption
      | typeof ImageInline
      | typeof ImageInsert
      | typeof ImageInsertViaUrl
      | typeof ImageResize
      | typeof ImageStyle
      | typeof ImageTextAlternative
      | typeof ImageToolbar
      | typeof ImageUpload
      | typeof Indent
      | typeof IndentBlock
      | typeof Italic
      | typeof Link
      | typeof LinkImage
      | typeof List
      | typeof ListProperties
      | typeof MediaEmbed
      | typeof PageBreak
      | typeof Paragraph
      | typeof PasteFromMarkdownExperimental
      | typeof PasteFromOffice
      | typeof RemoveFormat
      | typeof SelectAll
      | typeof ShowBlocks
      | typeof SpecialCharacters
      | typeof SpecialCharactersArrows
      | typeof SpecialCharactersCurrency
      | typeof SpecialCharactersEssentials
      | typeof SpecialCharactersLatin
      | typeof SpecialCharactersMathematical
      | typeof SpecialCharactersText
      | typeof Strikethrough
      | typeof Style
      | typeof Subscript
      | typeof Superscript
      | typeof Table
      | typeof TableCaption
      | typeof TableCellProperties
      | typeof TableColumnResize
      | typeof TableProperties
      | typeof TableToolbar
      | typeof TextPartLanguage
      | typeof TextTransformation
      | typeof Title
      | typeof TodoList
      | typeof Underline
      | typeof Undo
    )[];
    [key: string]: unknown;
  } = {
    toolbar: {
      items: [
        "undo",
        "redo",
        "|",
        "showBlocks",
        "findAndReplace",
        "selectAll",
        "textPartLanguage",
        "|",
        "heading",
        "style",
        "|",
        "fontSize",
        "fontFamily",
        "fontColor",
        "fontBackgroundColor",
        "|",
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "subscript",
        "superscript",
        "code",
        "removeFormat",
        "|",
        "specialCharacters",
        "horizontalLine",
        "pageBreak",
        "link",
        "insertImage",
        "mediaEmbed",
        "insertTable",
        "highlight",
        "blockQuote",
        "codeBlock",
        "htmlEmbed",
        "|",
        "alignment",
        "|",
        "bulletedList",
        "numberedList",
        "todoList",
        "outdent",
        "indent",
        "|",
        "accessibilityHelp",
      ],
      shouldNotGroupWhenFull: false,
    } as const,
    plugins: [
      AccessibilityHelp,
      Alignment,
      Autoformat,
      AutoImage,
      AutoLink,
      Autosave,
      Base64UploadAdapter,
      BlockQuote,
      BlockToolbar,
      Bold,
      Code,
      CodeBlock,
      Essentials,
      FindAndReplace,
      FontBackgroundColor,
      FontColor,
      FontFamily,
      FontSize,
      GeneralHtmlSupport,
      Heading,
      Highlight,
      HorizontalLine,
      HtmlComment,
      HtmlEmbed,
      ImageBlock,
      ImageCaption,
      ImageInline,
      ImageInsert,
      ImageInsertViaUrl,
      ImageResize,
      ImageStyle,
      ImageTextAlternative,
      ImageToolbar,
      ImageUpload,
      Indent,
      IndentBlock,
      Italic,
      Link,
      LinkImage,
      List,
      ListProperties,
      //Markdown,
      MediaEmbed,
      PageBreak,
      Paragraph,
      PasteFromMarkdownExperimental,
      PasteFromOffice,
      RemoveFormat,
      SelectAll,
      ShowBlocks,
      SpecialCharacters,
      SpecialCharactersArrows,
      SpecialCharactersCurrency,
      SpecialCharactersEssentials,
      SpecialCharactersLatin,
      SpecialCharactersMathematical,
      SpecialCharactersText,
      Strikethrough,
      Style,
      Subscript,
      Superscript,
      Table,
      TableCaption,
      TableCellProperties,
      TableColumnResize,
      TableProperties,
      TableToolbar,
      TextPartLanguage,
      TextTransformation,
      Title,
      TodoList,
      Underline,
      Undo,
    ],
    blockToolbar: [
      "fontSize",
      "fontColor",
      "fontBackgroundColor",
      "|",
      "bold",
      "italic",
      "|",
      "link",
      "insertImage",
      "insertTable",
      "|",
      "bulletedList",
      "numberedList",
      "outdent",
      "indent",
    ],
    fontFamily: {
      supportAllValues: true,
    },
    fontSize: {
      options: [10, 12, 14, "default", 18, 20, 22],
      supportAllValues: true,
    },
    heading: {
      options: [
        {
          model: "paragraph",
          title: "Paragraph",
          class: "ck-heading_paragraph",
        },
        {
          model: "heading1",
          view: "h1",
          title: "Heading 1",
          class: "ck-heading_heading1",
        },
        {
          model: "heading2",
          view: "h2",
          title: "Heading 2",
          class: "ck-heading_heading2",
        },
        {
          model: "heading3",
          view: "h3",
          title: "Heading 3",
          class: "ck-heading_heading3",
        },
        {
          model: "heading4",
          view: "h4",
          title: "Heading 4",
          class: "ck-heading_heading4",
        },
        {
          model: "heading5",
          view: "h5",
          title: "Heading 5",
          class: "ck-heading_heading5",
        },
        {
          model: "heading6",
          view: "h6",
          title: "Heading 6",
          class: "ck-heading_heading6",
        },
      ],
    },
    htmlSupport: {
      allow: [
        {
          name: /^.*$/,
          styles: true,
          attributes: true,
          classes: true,
        },
      ],
    },
    image: {
      toolbar: [
        "toggleImageCaption",
        "imageTextAlternative",
        "|",
        "imageStyle:inline",
        "imageStyle:wrapText",
        "imageStyle:breakText",
        "|",
        "resizeImage",
      ],
    },
    initialData: `<h1>${title}</h1> ${body}`,
    language: "ko",
    link: {
      addTargetToExternalLinks: true,
      defaultProtocol: "https://",
      decorators: {
        toggleDownloadable: {
          mode: "manual",
          label: "Downloadable",
          attributes: {
            download: "file",
          },
        },
      },
    },
    list: {
      properties: {
        styles: true,
        startIndex: true,
        reversed: true,
      },
    },
    placeholder: "Type or paste your content here!",
    style: {
      definitions: [
        {
          name: "Article category",
          element: "h3",
          classes: ["category"],
        },
        {
          name: "Title",
          element: "h2",
          classes: ["document-title"],
        },
        {
          name: "Subtitle",
          element: "h3",
          classes: ["document-subtitle"],
        },
        {
          name: "Info box",
          element: "p",
          classes: ["info-box"],
        },
        {
          name: "Side quote",
          element: "blockquote",
          classes: ["side-quote"],
        },
        {
          name: "Marker",
          element: "span",
          classes: ["marker"],
        },
        {
          name: "Spoiler",
          element: "span",
          classes: ["spoiler"],
        },
        {
          name: "Code (dark)",
          element: "pre",
          classes: ["fancy-code", "fancy-code-dark"],
        },
        {
          name: "Code (bright)",
          element: "pre",
          classes: ["fancy-code", "fancy-code-bright"],
        },
      ],
    },
    table: {
      contentToolbar: [
        "tableColumn",
        "tableRow",
        "mergeTableCells",
        "tableProperties",
        "tableCellProperties",
      ],
    },
    // translations: [translations],
  };

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="main-container prose lg:prose-lg dark:prose-invert w-full m-0">
        <div
          className="editor-container editor-container_balloon-editor editor-container_include-style editor-container_include-block-toolbar w-full"
          ref={editorContainerRef}
        >
          <div className="editor-container__editor">
            <div ref={editorWrapperRef}>
              {isLayoutReady && (
                <CKEditor
                  editor={BalloonEditor}
                  config={editorConfig}
                  onReady={(editor) => {
                    editorRef.current = editor; // editor 객체를 직접 할당
                    setIsEditorReady(true);
                  }}
                  onChange={(_, editor) => {
                    const data = editor.getData(); // HTML 데이터를 가져옴

                    // Extract the content of the <h1> tag
                    const regex = /<h1[^>]*>(.*?)<\/h1>/i;
                    const match = data.match(regex);

                    if (match) {
                      const title = match[1];
                      console.log("<h1> content:", title);
                      dispatch(setTitle(title.replace(/<\/?h1>/g, "")));

                      // Remove the <h1> tag and its content from the data
                      const bodyWithoutTitle = data.replace(regex, "");
                      dispatch(setBody(bodyWithoutTitle));
                    } else {
                      console.log("No <h1> tag found.");
                      // If no <h1> tag is found, store the full content
                      dispatch(setBody(data));
                    }
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full p-6">
        <Button className="px-8" onClick={handleButtonClick}>
          마크다운 포맷
        </Button>
        <Link2 to="../../">
          <ButtonDemo />
        </Link2>
      </div>
    </div>
  );
}
