import { INote } from "../../App";
import "./stickyWall.style.css";

interface INoteProps {
  note: INote;
  onDelete: (id: number) => void;
}

const StickyWall = (props: INoteProps) => {
  const { note, onDelete } = props;
  return (
    <div className="single__note">
      <h2>{note.title}</h2>
      <h4>{note.text}</h4>
      <button className="delete-btn" onClick={() => onDelete(note.id)}>
        X
      </button>
    </div>
  );
};

export default StickyWall;
