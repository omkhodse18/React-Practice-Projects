import { useState } from 'react'
import {nanoid} from 'nanoid';
import './App.css'
import NotesList from './components/NotesList'

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

  return (
    <div className='container'>
      
      <NotesList notes={notes} addNote={addNote} deleteNote={deleteNote}/>

    </div>
  )
}

export default App
