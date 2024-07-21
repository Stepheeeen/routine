// src/pages/NotesHome.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useNotes } from '../context/NotesContext';
import PageContainer from './Index';
import NotesImg from '../assets/images/NotesImage.png'

const NotesHome = () => {
  const { notes, deleteNote } = useNotes();

  return (
    <PageContainer
    pageTitle={'Notes'}
    path={'/new'}>
    <div className="p-4">
      
      <ul className="space-y-4">
        {notes.length === 0 ? (
          <div className='h-[78vh] flex flex-col justify-center items-center'>
            <img src={NotesImg} alt="notes" className='h-[200px] mt-[-70px] mb-[10px]' />
              No Notes Here
          </div>
        ) : (
          notes.map(note => (
            <li key={note.id} className="border p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold">{note.title}</h2>
              <p>{note.content.substring(0, 100)}...</p>
              <div className="mt-2 flex space-x-2">
                <Link to={`/note/${note.id}`} className="text-blue-500">View</Link>
                <Link to={`/edit-note/${note.id}`} className="text-yellow-500">Edit</Link>
                <button 
                  onClick={() => deleteNote(note.id)} 
                  className="text-red-500"
                >
                  Delete
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
