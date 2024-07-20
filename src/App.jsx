// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import customTheme from "./styles/theme";
import muiTheme from "./styles/muiTheme";
import Overview from './pages/Overview';
import Calender from './pages/Calender';
import TaskPage from './pages/Task';
import Note from './pages/Note';
import { NotesProvider } from './context/NotesContext';
import Authentication from './pages/Authentication';
import Profile from './pages/Profile';
import NotesList from './components/NotesList';
import NoteDetail from './components/NoteDetail';
import NoteForm from './components/NoteForm';
import EditNote from './components/EditNote';

const App = () => {
  return (
    <NotesProvider>
      <ChakraProvider theme={customTheme}>
        <MuiThemeProvider theme={muiTheme}>
          <Router>
            <Routes>
              <Route path='/' element={<Overview />} />
              <Route path='/calender' element={<Calender />} />
              <Route path='/task' element={<TaskPage />} />
              <Route path='/note' element={<Note />} />
              <Route path='/authentication' element={<Authentication />} />
              <Route path='/user' element={<Profile />} />
              <Route path='/notelist' element={<NotesList />} />
              <Route path='/note/:id' element={<NoteDetail />} />
              <Route path='/new' element={<NoteForm />} />
              <Route path='/edit-note/:id' element={<EditNote />} />
            </Routes>
          </Router>
        </MuiThemeProvider>
      </ChakraProvider>
    </NotesProvider>
  );
};

export default App;
