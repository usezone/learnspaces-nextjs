const NewFile = () => {
  return (
    <>
      <input type="checkbox" id="NewFile" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box flex flex-col h-80">
          <h3 className="text-xl font-bold text-white">New File</h3>

          <div className="flex flex-col my-auto">
            <label htmlFor="title" className="font-medium text-white">
              Note name
            </label>
            <input
              type="text"
              id="title"
              className="input bg-slate-700 mt-3"
              placeholder="Note name"
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
                type="submit"
                htmlFor="NewFile"
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

export default NewFile;
