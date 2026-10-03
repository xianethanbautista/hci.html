"use client";

import { useEffect, useState } from "react";
import { NoteItem } from "@/components/NoteItem";

type Note = {
  id: string;
  title: string;
  description: string;
};

const STORAGE_KEY = "gym-notes";

const seedNotes: Note[] = [
  {
    id: "1",
    title: "Push Day",
    description: "Bench press, incline dumbbell press, cable fly, and overhead press.",
  },
  {
    id: "2",
    title: "Leg Day",
    description: "Back squat, Romanian deadlift, walking lunges, and calf raises.",
  },
  {
    id: "3",
    title: "Cardio Burn",
    description: "30-minute treadmill incline walk with a final sprint interval block.",
  },
];

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedNotes = localStorage.getItem(STORAGE_KEY);

    if (savedNotes) {
      try {
        const parsedNotes = JSON.parse(savedNotes) as Note[];
        if (Array.isArray(parsedNotes) && parsedNotes.length > 0) {
          setNotes(parsedNotes);
          return;
        }
      } catch {
        setNotes(seedNotes);
      }
    }

    setNotes(seedNotes);
  }, []);

  useEffect(() => {
    if (notes.length > 0 || localStorage.getItem(STORAGE_KEY)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    }
  }, [notes]);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setEditingId(null);
    setError("");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();

    if (!trimmedTitle || !trimmedDescription) {
      setError("Please add both a workout title and description.");
      return;
    }

    const duplicate = notes.some(
      (note) =>
        note.title.toLowerCase() === trimmedTitle.toLowerCase() &&
        note.id !== editingId,
    );

    if (duplicate) {
      setError("This note already exists. Try a different workout title.");
      return;
    }

    if (editingId) {
      setNotes((currentNotes) =>
        currentNotes.map((note) =>
          note.id === editingId
            ? { ...note, title: trimmedTitle, description: trimmedDescription }
            : note,
        ),
      );
    } else {
      const newNote: Note = {
        id: Date.now().toString(),
        title: trimmedTitle,
        description: trimmedDescription,
      };

      setNotes((currentNotes) => [newNote, ...currentNotes]);
    }

    resetForm();
  };

  const handleDelete = (id: string) => {
    setNotes((currentNotes) => currentNotes.filter((note) => note.id !== id));

    if (editingId === id) {
      resetForm();
    }
  };

  const handleEdit = (note: Note) => {
    setTitle(note.title);
    setDescription(note.description);
    setEditingId(note.id);
    setError("");
  };

  return (
    <main className="page-shell">
      <div className="page-glow" aria-hidden="true" />

      <section className="app-header">
        <div>
          <p className="eyebrow">Performance journal</p>
          <h1>Gym Notes</h1>
        </div>
        <div className="live-pill">
          <span className="dot" />
          {notes.length} notes tracked
        </div>
      </section>

      <section className="content-grid">
        <form className="note-form" onSubmit={handleSubmit}>
          <div className="form-header">
            <h2>{editingId ? "Update Note" : "Add a New Note"}</h2>
          </div>

          <label className="field">
            <span>Workout title</span>
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Upper body blast"
            />
          </label>

          <label className="field">
            <span>Description</span>
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Write your sets, reps, and plan for the session..."
              rows={5}
            />
          </label>

          {error ? <p className="error-message">{error}</p> : null}

          <div className="form-actions">
            <button type="submit" className="primary-button">
              {editingId ? "Save Changes" : "Add Note"}
            </button>
            {editingId ? (
              <button type="button" className="secondary-button" onClick={resetForm}>
                Cancel
              </button>
            ) : null}
          </div>
        </form>

        <div className="notes-panel">
          <div className="notes-header">
            <h2>Workout Log</h2>
            <span>{notes.length} saved</span>
          </div>

          {notes.length === 0 ? (
            <div className="empty-state">
              <p>No notes yet.</p>
              <span>Add your first training plan to get started.</span>
            </div>
          ) : (
            <ul className="notes-list">
              {notes.map((note) => (
                <NoteItem
                  key={note.id}
                  note={note}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
