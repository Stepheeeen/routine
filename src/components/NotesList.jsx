// src/components/NotesList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useNotes } from '../context/NotesContext';

const NotesList = () => {
  const { notes } = useNotes();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Notes</h1>
      <Link to="/new" className="text-blue-500">Add Note</Link>
      <ul>
        {notes.map((note) => (
          <li key={note.id} className="mt-2">
            <Link to={`/note/${note.id}`} className="text-blue-500">{note.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
