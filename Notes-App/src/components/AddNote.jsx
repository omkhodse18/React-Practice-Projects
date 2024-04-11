import React, { useState } from 'react'

function AddNote({addNote}) {
    const [noteText, setNoteText] = useState('');
    const characterLimit = 200;

    function changeHandler(event){
        if(characterLimit - event.target.value.length >= 0){
            setNoteText(event.target.value);
        }

    }

    function clickHandler(){
        // It means after removing the whitespace we still have some texts
        if(noteText.trim().length > 0){
            addNote(noteText);
            setNoteText('');    //blank for new note
        }

    }

    return (
        <div className='note new'>
            <textarea 
                rows='8'
                cols='9' 
                placeholder='Type to add a note...'
                value={noteText}
                onChange={changeHandler}    
            >
                
            </textarea>

            <div className='note-footer'>
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className='save' onClick={clickHandler}>Save</button>
            </div>
        </div>
    )
}

export default AddNote
