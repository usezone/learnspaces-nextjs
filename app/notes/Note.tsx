import { FileTextIcon } from "@iconicicons/react";

const Note = ({ isActive, title }) => {
  return (
    <div
      className={`card rounded-lg ${
        isActive ? "bg-white/5" : null
      } p-2 btn-ghost cursor-pointer`}
    >
      <div className="flex space-x-1 items-center">
        <FileTextIcon />
        <p className="text-xs">{title}</p>
      </div>
    </div>
  );
};

export default Note;
