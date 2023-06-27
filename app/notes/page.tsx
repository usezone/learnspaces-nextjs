import NotesList from "./notes-list";
import Nav from "./nav";
import Editor from "./editor";
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
