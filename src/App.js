import "./App.css";
import React, {useState, useEffect} from "react";

import TabsList from "./components/TabsList";
import NotesField from "./components/NotesField";


const currList = [
  {
      "id": "d7c93ace-a498-4eab-b97a-89b68a5b5b61",
      "value": "You've met me in a weird time of my life.",
      "isActive": false
  },
  {
      "id": "edd9dbf2-8c0f-4b70-a7ef-601ef4e9ef35",
      "value": "Everything will pass, even this.",
      "isActive": false
  },
  {
      "id": "24b2bd28-cf21-4518-830d-40be7ecd3c14",
      "value": "Something else.",
      "isActive": false
  },
  {
      "id": "82f4250c-4f17-4c6c-a6e2-da723d890d8d",
      "value": "Lorem ipsum.",
      "isActive": false
  },
  {
      "id": "e2ae2797-99f5-47c5-a9f4-ca487d77aebf",
      "value": "Dogs are nice, but I like cats!",
      "isActive": false
  }
]

export default function App() {

    // Load initial state from localStorage if available, otherwise use currList
    const [notesList, setNotesList] = useState(() => {
      const savedNotes = localStorage.getItem("notes");
      return savedNotes ? JSON.parse(savedNotes) : currList;
    });
  
    // Update localStorage whenever notesList changes
    useEffect(() => {
      localStorage.setItem("notes", JSON.stringify(notesList));
    }, [notesList]);

  return (
  <div className="notes-container">
    <TabsList notesList={notesList} setNotesList={setNotesList}/>
    <NotesField notesList={notesList} setNotesList={setNotesList}/>
  </div>
)}
