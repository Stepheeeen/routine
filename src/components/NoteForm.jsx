// src/components/NoteForm.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useNotes } from '../context/NotesContext';
import Done from '../assets/icons/doneIcon.svg'
import Back from '../assets/icons/returnIcon.svg'

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
    <div className="p-3 w-[100%]">
    <div className={`p-2 py-5 flex justify-between items-center`}>
      <Link to={'/note'}>
        <img src={Back} alt={id ? 'Update Note' : 'Create Note'} />
      </Link>
      <h1 className='text-[20px] font-[600]'>
        Notes
      </h1>
      <button onClick={handleSubmit} type="submit" className="">
        <img src={Done} alt={id ? 'Update Note' : 'Create Note'} />
      </button>
    </div>

      <form className="mt-1">
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 w-full outline-none text-[18px] font-[600]"
            placeholder="Title"
            required
          />
        </div>
        <div className="mt-1">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="p-2 w-full outline-none h-[67vh]"
            placeholder="Content"
            required
          />
        </div>

      </form>
    </div>
  );
};

export default NoteForm;
