import {
  IconCheckbox,
  IconChevronDown,
  IconSeparator,
  IconList,
  IconQuote,
} from "@tabler/icons-react";

const FloatingMenubar = ({ editor }: { editor: any }) => {
  const btnClasses = "btn btn-sm btn-square btn-ghost";
  const active = "btn btn-secondary btn-sm btn-square";

  const handleFormat = (format: string) => {
    if (editor.isActive(format)) return active;
    return btnClasses;
  };

  const headingLevels = [
    {
      level: 1,
      class: "text-2xl",
    },
    { level: 2, class: "text-xl" },
    { level: 3, class: "text-lg" },
  ];

  return (
    <div className="flex shadow-lg w-fit bg-black/10 backdrop-blur-3xl z-20 top-0 sticky p-1 rounded-lg space-x-1">
      {/* Headings, Bullet list, Checklist, Bullet list, number list, quote, Horizontal Rule */}
      <div className="dropdown">
        <button
          tabIndex={0}
          className="btn btn-ghost btn-sm space-x-2 normal-case font-normal"
        >
          <span>Title</span>
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

      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={handleFormat("blockquote")}
      >
        <IconQuote size={16} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={handleFormat("orderedList")}
      >
        <IconList size={16} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={handleFormat("bulletList")}
      >
        <IconList size={16} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleTaskList().run()}
        className={handleFormat("taskList")}
      >
        <IconCheckbox size={16} />
      </button>

      <button
        className="btn btn-sm btn-square btn-ghost"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      >
        <IconSeparator size={16} />
      </button>
    </div>
  );
};

export default FloatingMenubar;
