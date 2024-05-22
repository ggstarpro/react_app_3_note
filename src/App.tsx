import { useEffect, useState } from 'react'
import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import uuid from "react-uuid"

export type Note = {
  id: string;
  title: string;
  content: string;
  modDate: number;
}
function App() {
  const storedNotes = localStorage.getItem('notes')
  const storedParsedNoted = storedNotes ? JSON.parse(storedNotes) : [];
  const [notes, setNotes] = useState<Note[]>(storedParsedNoted);
  const [activeNote, setActiveNote] = useState<string>('');

  useEffect(() => {
    // ローカルストレージに保存
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes])

  useEffect(() => {
    if (notes[0]) {
      setActiveNote(notes[0].id);
    }
  }, [])
  const onAddNote = () => {
    const newNote: Note = {
      id: uuid(),
      title: "新しいタイトル",
      content: "",
      modDate: Date.now(),
    }
    setNotes([...notes, newNote])
  }

  const onDeleteNote = (id: string) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  }

  const onUpdateNote = (updatedNote: Note) => {
    // 修正された新しいノートの配列を返す
    const updatedNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }
      return note;
    })

    setNotes(updatedNotesArray);
  }

  return (
    <div className='App'>
      <Sidebar
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        notes={notes}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main
        activeNote={getActiveNote()}
        onUpdateNote={onUpdateNote}
      />
    </div>
  )
}

export default App
