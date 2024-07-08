// src/components/NoteForm.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useNotes } from '../context/NotesContext';

const NoteForm = () => {
  const { addNote, updateNote, notes } = useNotes();
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Load existing note data if editing
  useEffect(() => {
    if (id) {
      const note = notes.find((note) => note.id === parseInt(id));
      if (note) {
        setTitle(note.title);
        setContent(note.content);
      }
    }
  }, [id, notes]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      // Editing an existing note
      updateNote({ id: parseInt(id), title, content });
    } else {
      // Creating a new note
      addNote({ id: Date.now(), title, content });
    }
    navigate('/note');  // Redirect to the notes homepage
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{id ? 'Edit Note' : 'Create Note'}</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div>
          <label className="block">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full"
            placeholder="Enter note title"
            required
          />
        </div>
        <div className="mt-4">
          <label className="block">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border p-2 w-full"
            placeholder="Enter note content"
            required
          />
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
          {id ? 'Update Note' : 'Create Note'}
        </button>
      </form>
    </div>
  );
};

export default NoteForm;
