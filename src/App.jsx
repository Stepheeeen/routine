// src/App.jsx
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Overview from './pages/Overview';
import Calender from './pages/Calender';
import TaskPage from './pages/Task'
import Note from './pages/Note'

// context routing
import { NotesProvider } from './context/NotesContext';

// components routing
import NotesList from './components/NotesList';
import NoteDetail from './components/NoteDetail';
import NoteForm from './components/NoteForm';
import EditNote from './components/EditNote'; 
import Authentication from './pages/Authentication';
import Profile from './pages/Profile';

const App = () => {
  return (
    <NotesProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Overview />} />
          <Route path='/calender' element={<Calender />} />
          <Route path='/task' element={<TaskPage />} />
          <Route path='/note' element={<Note />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/user" element={<Profile/>} />

          <Route path="/notelist" element={<NotesList />} />
          <Route path="/note/:id" element={<NoteDetail />} />
          <Route path="/new" element={<NoteForm />} />
          <Route path="/edit-note/:id" element={<EditNote />} />
        </Routes>
      </Router>

    </NotesProvider>
  )
}

export default App