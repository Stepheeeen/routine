// src/components/NoteDetail.jsx
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useNotes } from '../context/NotesContext';

const NoteDetail = () => {
  const { id } = useParams();
  const { notes, deleteNote } = useNotes();
  const navigate = useNavigate();

  const note = notes.find((note) => note.id === parseInt(id));

  if (!note) {
    return <p>Note not found</p>;
  }

  const handleDelete = () => {
    deleteNote(note.id);
    navigate('/note');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{note.title}</h1>
      <p>{note.content}</p>
      <div className="mt-4">
        <Link to={`/edit-note/${note.id}`} className="text-yellow-500">Edit Note</Link>
        <button onClick={handleDelete} className="text-red-500 ml-4">Delete Note</button>
        <Link to="/note" className="text-blue-500 ml-4">Back to Notes</Link>
      </div>
    </div>
  );
};

export default NoteDetail;
