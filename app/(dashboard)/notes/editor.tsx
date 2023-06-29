"use client";
import {
  EditorContent,
  ReactNodeViewRenderer,
  useEditor,
  BubbleMenu,
  FloatingMenu,
} from "@tiptap/react";
import { highlightLanguages } from "../../lib/constants";
import { lowlight } from "lowlight/lib/core";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import TaskList from "@tiptap/extension-task-list";
import { helloWorld } from "./templates/default";
import CodeBlock from "./code-block";
import MenuBar from "./menu-bar";

import "highlight.js/styles/vs2015.css";
import "./editor.css";
import TaskItem from "@tiptap/extension-task-item";
import Strike from "@tiptap/extension-strike";
import FloatingMenubar from "./floating-menubar";
import PopupMenubar from "./popup-menubar";

highlightLanguages.forEach((language) => {
  lowlight.registerLanguage(language.name, language);
});

const Editor = () => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          "prose dark:prose-invert prose-sm sm:prose-base m-5 mx-auto focus:outline-none",
      },
    },
    onUpdate: (editor) => {
      // Update database
      // console.log(editor.editor.getHTML());
    },
    extensions: [
      Placeholder.configure({
        placeholder: "Write something...",
      }),
      TextStyle.configure({
        [TextStyle.name]: {
          // Specify the properties for TextStyle.name
          // For example:
          fontSize: 16,
          fontWeight: "bold",
        },
        [ListItem.name]: {
          // Specify the properties for ListItem.name
          // For example:
          fontSize: 14,
          fontStyle: "italic",
        },
      }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
      Strike,
      TaskList,
      TaskItem,
      Highlight.configure({
        multicolor: true,
      }),
      Underline,
      CodeBlockLowlight.extend({
        addNodeView() {
          return ReactNodeViewRenderer(CodeBlock);
        },
      }).configure({ lowlight }),
    ],
    content: helloWorld,
  });

  return (
    <div className="text-white w-100 mt-8 flex flex-col">
      <div className="mx-auto top-0 sticky p-1 z-50">
        <MenuBar editor={editor} />
      </div>
      {editor && (
        <>
          <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
            <FloatingMenubar editor={editor} />
          </FloatingMenu>

          <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
            <PopupMenubar editor={editor} />
          </BubbleMenu>
        </>
      )}
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
