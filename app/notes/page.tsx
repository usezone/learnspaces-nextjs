import NotesList from "./NotesList";
import Nav from "./Nav";
import Editor from "./Editor";
const Notes = () => {
  return (
    <NotesList>
      <Nav>
        <Editor />
      </Nav>
    </NotesList>
  );
};

export default Notes;
