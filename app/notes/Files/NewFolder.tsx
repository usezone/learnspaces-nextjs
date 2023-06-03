const NewFolder = () => {
  return (
    <>
      <input type="checkbox" id="NewFolder" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box flex flex-col h-80">
          <h3 className="text-xl font-bold text-white">New Folder</h3>

          <div className="flex flex-col my-auto">
            <label htmlFor="title" className="font-medium text-white">
              Folder name
            </label>
            <input
              type="text"
              id="title"
              className="input border-slate-700 bg-black/10 mt-3"
              required
            />
            <div className="flex space-x-3 ml-auto mt-8">
              <button
                type="submit"
                className="btn btn-primary normal-case w-fit"
              >
                Create
              </button>
              <label
                htmlFor="NewFolder"
                className="btn btn-ghost font-medium normal-case w-fit"
              >
                Cancel
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewFolder;
