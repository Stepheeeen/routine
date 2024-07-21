// src/pages/NotesHome.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useNotes } from '../context/NotesContext';
import PageContainer from './Index';

const NotesHome = () => {
  const { notes, deleteNote } = useNotes();

  return (
    <PageContainer>
    <div className="p-4">
      <h1 className="text-2xl font-bold">Notes Homepage</h1>
      <Link to="/new" className="text-blue-500 mb-4 block">Create New Note</Link>
      <ul className="space-y-4">
        {notes.length === 0 ? (
          <p>No notes available. Create one to get started!</p>
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
