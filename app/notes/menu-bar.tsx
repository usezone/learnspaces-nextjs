import {
  IconArrowBackUp,
  IconBold,
  IconItalic,
  IconCode,
  IconList,
  IconQuote,
  IconSeparator,
  IconTypographyOff,
  IconChevronDown,
  IconUnderline,
  IconCheckbox,
  IconStrikethrough,
  IconSourceCode,
  IconHighlight,
  IconListNumbers,
} from "@tabler/icons-react";
import { colors } from "../../lib/constants";

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null;
  }

  const btnClasses = "btn btn-sm btn-square btn-ghost";
  const highlightClasses = "btn btn-sm hover:ring btn-circle";
  const active = "btn btn-secondary btn-sm btn-square";

  const headingLevels = [
    {
      level: 1,
      class: "text-2xl",
    },
    { level: 2, class: "text-xl" },
    { level: 3, class: "text-lg" },
  ];

  const handleHighlight = (color: string) => {
    editor.chain().focus().toggleHighlight({ color }).run();
  };

  const handleFormat = (format: string) => {
    if (editor.isActive(format)) return active;
    return btnClasses;
  };

  return (
    <div className="flex mb-5 w-fit bg-black/10 backdrop-blur-3xl z-20 rounded-lg space-x-1">
      <button
        className="btn btn-sm btn-square btn-ghost"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        title="Undo"
      >
        <IconArrowBackUp size={16} />
      </button>
      <button
        className="btn btn-sm btn-square btn-ghost transform -scale-x-100"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        title="Redo"
      >
        <IconArrowBackUp size={16} />
      </button>

      <div className="border-l-[0.00005px] border-white/5" />

      <div className="dropdown">
        <button
          tabIndex={0}
          className="btn btn-ghost btn-sm space-x-2 normal-case font-normal"
        >
          <span>Text Style</span>
          <IconChevronDown className="w-[10px]" size={16} />
        </button>
        <ul
          tabIndex={0}
          className="dropdown-content p-2 bg-base-100 rounded-box w-44"
        >
          {headingLevels.map((h) => (
            <li
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: h.level }).run()
              }
              key={h.level}
              className={
                editor.isActive("heading", { level: h.level })
                  ? "btn btn-secondary w-full normal-case"
                  : `btn btn-ghost normal-case w-full`
              }
            >
              <span className={h.class}>Heading {h.level}</span>
            </li>
          ))}
          <li
            onClick={() => editor.chain().focus().setParagraph().run()}
            className="btn btn-ghost normal-case w-full font-normal"
          >
            Normal Text
          </li>
        </ul>
      </div>

      <div className="border-l-[0.00005px] border-white/5" />

      {/* Bold, Italic, Strikethrough, Underline and Inline code */}
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={handleFormat("bold")}
      >
        <IconBold size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={handleFormat("italic")}
      >
        <IconItalic size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={handleFormat("strike")}
      >
        <IconStrikethrough size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
        className={editor.isActive("underline") ? active : btnClasses}
      >
        <IconUnderline size={16} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={handleFormat("code")}
        title="Inline code"
      >
        <IconCode size={16} />
      </button>

      <div className="border-l-[0.00005px] border-white/5" />
      {/* Quote, Codeblock, Lists(Bullet list, Number list, Check list) */}
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={handleFormat("blockquote")}
      >
        <IconQuote size={16} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={handleFormat("codeBlock")}
        title="Code block"
      >
        <IconSourceCode size={16} />
      </button>

      <div className="dropdown">
        <button
          tabIndex={0}
          className={handleFormat("highlight")}
          title="Highlight"
        >
          <IconHighlight size={16} />
        </button>
        <ul
          tabIndex={0}
          className="dropdown-content p-2 bg-base-100 rounded-box w-fit flex space-x-1 mx-auto"
        >
          {colors.map((c, i) => (
            <button
              onClick={() => handleHighlight(c.color)}
              key={i}
              className={
                editor.isActive("highlight", { color: c.color })
                  ? `${highlightClasses} bg-[${c.color}] hover:bg-[${c.color}] ring`
                  : `${highlightClasses} bg-[${c.color}] hover:bg-[${c.color}]`
              }
            />
          ))}
        </ul>
      </div>

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={handleFormat("bulletList")}
      >
        <IconList size={16} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={handleFormat("orderedList")}
      >
        <IconListNumbers size={16} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleTaskList().run()}
        className={handleFormat("taskList")}
      >
        <IconCheckbox size={16} />
      </button>

      <div className="border-l-[0.00005px] border-white/5" />

      <button
        className="btn btn-sm btn-square btn-ghost"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      >
        <IconSeparator size={16} />
      </button>

      <button
        className="btn btn-sm btn-ghost btn-square"
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
      >
        <IconTypographyOff size={16} />
      </button>
    </div>
  );
};

export default MenuBar;
