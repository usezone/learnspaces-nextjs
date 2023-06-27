const CreatePost = () => {
  return (
    <div
      className="card bg-black/30 rounded-lg p-3 border border-white/10 shadow-lg"
      tabIndex={1}
    >
      <div className="flex items-center">
        <div className="avatar placeholder object-fill">
          <div className="rounded-full bg-amber-700 h-12 w-12 mr-3">Z</div>
        </div>
        <span className="text-sm font-medium text-white/90">
          Share your thoughts!
        </span>
      </div>
    </div>
  );
};

export default CreatePost;
