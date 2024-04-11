import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

function NotesList({notes, addNote}) {
  return (
    <div className='notes-list'>
        {
            notes.map((note) => (<Note note={note}/>))
        }

        <AddNote addNote={addNote}/>
    </div>
  )
}

export default NotesList
