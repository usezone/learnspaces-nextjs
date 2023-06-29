import { FolderIcon } from "@iconicicons/react";
import { ChevronRightIcon } from "@radix-ui/react-icons";

const Folder = ({ isActive, title }: { isActive: boolean; title: string }) => {
  return (
    <button
      className={`card rounded-lg ${
        isActive ? "bg-white/5" : null
      } p-2 btn-ghost cursor-pointer`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-center space-x-1">
          <ChevronRightIcon />
          <FolderIcon />
          <p className="text-xs">{title}</p>
        </div>
      </div>
    </button>
  );
};

export default Folder;
