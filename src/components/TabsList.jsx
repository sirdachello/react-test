import React from "react";

import { v4 as uuid } from 'uuid';

export default function TabsList({notesList, setNotesList}) {

    const list = notesList.map((note, index) => {
        return <li key={note.id} 
        className={`notes-tab ${note.isActive ? "active" : ``} ${note.isMatching ? "foundMatches" : ``}`}  
        onClick={() => setActive(note.id)}
         >
            tab{index+1}
        </li>
    })

    function setActive(ID) {
        setNotesList(currentList => currentList.map((note) => {
            if(note.id === ID) {
                return {...note, "isActive": true}
            } else return {...note, "isActive": false}
        }))        
    }

    function addNewNote() {
        let newNote =   {
            "id": `${uuid()}`,
            "value": "",
            "isActive": false,
            "isMatching": false,
        }
        setNotesList(currentList => [...currentList, newNote])
    }

    return (
    <ul className="notes-tabs-list">
        {list}
        <li><button className="add-note-button" onClick={() => addNewNote()}>+</button></li>
    </ul>
    )
}