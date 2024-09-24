import React from "react";

export default function SearchNotes({notesList, setNotesList}) {

    function findContent(text) {
        if (!text) {
            setNotesList(currentList => currentList.map(note => {return {...note, "isMatching": false}})) 
        } else {
            setNotesList(currentList => currentList.map(note => {
                if (note.value.includes(text)) {
                    return {...note, "isMatching": true}
                } else return {...note, "isMatching": false}
            }))
        }


    }

    return (
        <>
        <label htmlFor="notes-search-field">Find: </label>
        <input type="text" id="notes-search-field" onChange={(e) => findContent(e.target.value)}/>
        </>
    )
}