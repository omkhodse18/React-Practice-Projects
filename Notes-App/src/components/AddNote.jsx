import React, { useState } from 'react'

function AddNote({addNote}) {
    const [noteText, setNoteText] = useState('');

    function changeHandler(event){
        setNoteText(event.target.value);
    }

    function clickHandler(){
        // It means after removing the whitespace we still have some texts
        if(noteText.trim().length > 0){
            addNote(noteText);
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
                <small>200 Remaining</small>
                <button className='save' onClick={clickHandler}>Save</button>
            </div>
        </div>
    )
}

export default AddNote
