// src/pages/NotesHome.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useNotes } from '../context/NotesContext';
import PageContainer from './Index';
import NotesImg from '../assets/images/NotesImage.png'
import EditIcon from '../assets/icons/editIcon.svg'
import DeleteIcon from '../assets/icons/deleteIcon.svg'

const NotesHome = () => {
  const { notes, deleteNote } = useNotes();

  return (
    <PageContainer
      pageTitle={'Notes'}
      path={'/new'}>
      <div className="p-4 my-[-15px]">

        <ul className="space-y-4">
          {notes.length === 0 ? (
            <div className='h-[78vh] flex flex-col justify-center items-center'>
              <img src={NotesImg} alt="notes" className='h-[200px] mt-[-70px] mb-[10px]' />
              No Notes Here
            </div>
          ) : (
            notes.map(note => (
              <li key={note.id} className="border p-4 rounded-lg shadow-sm flex items-center">
                <Link to={`/note/${note.id}`} className="w-[90%]">
                  <h2 className="text-xl font-semibold">{note.title}</h2>
                  <p>{note.content.substring(0, 20)}...</p>
                </Link>
                <div className="flex items-center justify-between flex-col">
                  <Link to={`/edit-note/${note.id}`}>
                  <img src={EditIcon} alt="Icon" />
                  </Link>
                  <button
                    onClick={() => deleteNote(note.id)}
                    className='mt-1'
                    >
                    <img src={DeleteIcon} alt="Icon" />
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </PageContainer>
  );
};

export default NotesHome;
