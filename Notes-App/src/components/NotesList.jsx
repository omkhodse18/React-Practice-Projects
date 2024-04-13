import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

function NotesList({notes, addNote, deleteNote}) {
  return (
    <div className='notes-list'>
        {
            notes.map((note) => (<Note key={note.id} note={note} deleteNote={deleteNote}/>))
        }

        <AddNote addNote={addNote}/>
    </div>
  )
}

export default NotesList
