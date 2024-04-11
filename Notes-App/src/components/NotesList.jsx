import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

function NotesList({notes}) {
  return (
    <div className='notes-list'>
        {
            notes.map((note) => (<Note note={note}/>))
        }

        <AddNote/>
    </div>
  )
}

export default NotesList
