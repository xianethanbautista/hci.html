type Note = {
  id: string;
  title: string;
  description: string;
};

type NoteItemProps = {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (id: string) => void;
};

export function NoteItem({ note, onEdit, onDelete }: NoteItemProps) {
  return (
    <li className="note-item">
      <div className="note-copy">
        <span className="note-label">Workout</span>
        <h3>{note.title}</h3>
        <p>{note.description}</p>
      </div>

      <div className="note-actions">
        <button type="button" className="secondary-button" onClick={() => onEdit(note)}>
          Edit
        </button>
        <button type="button" className="danger-button" onClick={() => onDelete(note.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}
