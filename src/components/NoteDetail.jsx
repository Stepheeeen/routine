// src/components/NoteDetail.jsx
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useNotes } from '../context/NotesContext';
import Back from '../assets/icons/returnIcon.svg'
import EditIcon from '../assets/icons/editIcon.svg'
import DeleteIcon from '../assets/icons/deleteIcon.svg'

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
      <div className="flex justify-between items-center mt-2 mb-5">
        <div>
          <Link to="/note" className="">
            <img src={Back} alt="" className='' />
          </Link>
        </div>

        <div className='flex items-center justify-center'>
          <Link to={`/edit-note/${note.id}`} className="mr-3">
            <img src={EditIcon} alt="" />
          </Link>
          <button onClick={handleDelete} className="">
            <img src={DeleteIcon} alt="" />
          </button>
        </div>

      </div>
      <h1 className="text-2xl font-bold">{note.title}</h1>
      <p>{note.content}</p>
    </div>
  );
};

export default NoteDetail;
