"use client";
import {
  IconCode,
  IconBold,
  IconItalic,
  IconTypographyOff,
  IconUnderline,
  IconStrikethrough,
  IconPencil,
} from "@tabler/icons-react";
import { colors } from "../../lib/constants";

type Colors = {
  name: string;
  color: string;
};

const PopupMenubar = ({ editor }: { editor: any }) => {
  const btnClasses = "btn btn-sm btn-square btn-ghost";
  const highlightClasses = "btn btn-sm hover:ring btn-circle";
  const active = "btn btn-secondary btn-sm btn-square";

  const handleHighlight = (color: string) => {
    editor.chain().focus().toggleHighlight({ color }).run();
  };

  const handleFormat = (format: string) => {
    if (editor.isActive(format)) return active;
    return btnClasses;
  };

  return (
    <div className="flex w-fit bg-black/10 backdrop-blur-3xl z-20 top-0 sticky p-1 rounded-lg space-x-1">
      {/* Bold, Italics, Strikethrough, Underline, Highlight, Code, Clear formatting */}
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

      <div className="dropdown">
        <button
          tabIndex={0}
          className={handleFormat("highlight")}
          title="Highlight"
        >
          <IconPencil size={16} />
        </button>
        <ul
          tabIndex={0}
          className="dropdown-content p-2 bg-base-100 rounded-box w-fit flex space-x-1 mx-auto"
        >
          {colors.map((c: Colors, i: number) => (
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
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={handleFormat("code")}
        title="Inline code"
      >
        <IconCode size={16} />
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

export default PopupMenubar;
