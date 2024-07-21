// src/pages/EditNote.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useNotes } from '../context/NotesContext';
import NoteForm from '../components/NoteForm';

const EditNote = () => {
  const { id } = useParams();
  const { notes, updateNote } = useNotes();
  const [note, setNote] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Find the note to be edited
    const foundNote = notes.find((note) => note.id === parseInt(id));
    if (foundNote) {
      setNote(foundNote);
    } else {
      navigate('/notes'); // Redirect if note not found
    }
  }, [id, notes, navigate]);

  const handleUpdate = (updatedNote) => {
    updateNote(updatedNote);
    navigate('/notes');
  };

  return (
    <div>
      {note ? (
        <NoteForm
          title={note.title}
          content={note.content}
          onSubmit={(title, content) => handleUpdate({ id: note.id, title, content })}
        />
      ) : (
        <p className='mt-[50%] ml-[50%]'>Loading...</p>
      )}
    </div>
  );
};

export default EditNote;
