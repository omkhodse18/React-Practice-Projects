import { useEffect, useState } from 'react'
import {nanoid} from 'nanoid';
import './App.css'
import NotesList from './components/NotesList'
import Search from './components/Search';
import Header from './components/Header';

function App() {

  const [notes, setNotes] = useState([
    // {
    //   id : nanoid(),
    //   text: "This is my first note",
    //   date: "11/04/2024"
    // },
    // {
    //   id : nanoid(),
    //   text: "This is my second note",
    //   date: "12/04/2024"
    // },
    // {
    //   id : nanoid(),
    //   text: "This is my third note",
    //   date: "13/04/2024"
    // },
    // {
    //   id : nanoid(),
    //   text: "This is my fourth note",
    //   date: "14\/04/2024"
    // },
  ]);

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const addNote = (text) => {
    const date = new Date();

    const newNote = {
      date : date.toLocaleDateString(),
      text : text,
      id : nanoid()
    }

    const noteArray = [...notes, newNote];
    setNotes(noteArray);
  }
  

  const deleteNote = (id) => {
    const newNotes = notes.filter( (note) => note.id !== id );
    setNotes(newNotes);
  }

  useEffect(()=> {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

    if(savedNotes){
      setNotes(savedNotes);
    }
  },[])

  useEffect(()=> {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  },[notes])

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className={`container`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Search searchNote={setSearchText}/>
        <NotesList 
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
          addNote={addNote}
          deleteNote={deleteNote}/>

      </div>

    </div>
  )
}

export default App
