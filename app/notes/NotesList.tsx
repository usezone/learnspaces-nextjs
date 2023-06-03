import { IconSearch, IconFolder, IconUserPlus } from "@tabler/icons-react";
import Note from "./Note";
import Folder from "./Folder";
import NewFolder from "./Files/NewFolder";
import NewFile from "./Files/NewFile";

const NotesList = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-wrap overflow-hidden w-full overflow-y-auto h-screen">
      <ul className="w-3/12 p-5 bg-black/20 text-neutral-content font-medium space-y-3">
        <div className="menu menu-horizontal mb-10 space-x-3">
          <button className="btn btn-ghost btn-circle normal-case text-base bg-base-100 bg-white/10">
            <IconSearch size={16} />
          </button>
          <label
            htmlFor="NewFile"
            className="btn btn-ghost btn-circle normal-case text-base bg-base-100 bg-white/10"
          >
            <IconFolder size={16} />
          </label>
          <label
            htmlFor="NewFolder"
            className="btn btn-ghost btn-circle normal-case text-base bg-base-100 bg-white/10"
          >
            <IconUserPlus size={16} />
          </label>
        </div>

        <div className="menu space-y-1">
          <Folder title="Lorem Ipsum" isActive={true} />
          <Folder title="AP CS Principles I" isActive={false} />
          <Folder title="UI/UX Design" isActive={false} />
          <Note title="Getting Started" isActive={false} />
          <Note title="Biology 101" isActive={false} />
          <Note title="Todo List" isActive={false} />
          <Note title="Research Questions" isActive={false} />
        </div>
      </ul>
      <div className="bg-black/40 w-9/12 p-3 h-screen overflow-y-scroll">
        {children}
        <NewFolder />
        <NewFile />
      </div>
    </div>
  );
};

export default NotesList;
