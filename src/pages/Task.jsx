// src/pages/Task.jsx
import React from 'react';
import { useNotes } from '../context/NotesContext';

const Task = () => {
  const { notes, addNote, deleteNote, updateNote } = useNotes();

  const handleAddNote = () => {
    addNote({
      id: Date.now(),
      title: "New Task Note",
      content: "Content for the new task note."
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Task Page</h1>
      <button onClick={handleAddNote} className="mt-2 bg-blue-500 text-white p-2">Add Note</button>
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            <h2 className="text-xl font-semibold">{note.title}</h2>
            <p>{note.content}</p>
            <button onClick={() => deleteNote(note.id)} className="text-red-500">Delete</button>
            <button onClick={() => updateNote({
              ...note,
              title: "Updated Task Note Title"
            })} className="text-blue-500">Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task;
