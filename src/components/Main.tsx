import React from 'react'
import "./Main.css"
import { Note } from '../App';
import Markdown from 'react-markdown'

type MainProps = {
  activeNote: Note|undefined;
  onUpdateNote: (updateNote: Note) => void;
}

function Main(props: MainProps) {
  const {activeNote, onUpdateNote} = props;
  const onEditNote = (key:'title' | 'content', value:string) => {
    if (!activeNote) {
      return;
    }
    onUpdateNote({
      ...activeNote,
      [key]: value,
      modDate: Date.now(),
    });
  }

  if (!activeNote) {
    return <div className='no-active-note'>ノートが選択されていません</div>
  }
  return (
    <div className='app-main'>
      <div className='app-main-note-edit'>
        <input
          id="title"
          type="text"
          value={activeNote.title}
          onChange={(e) => onEditNote("title", e.target.value)}
        />
        <textarea
          id="content"
          placeholder='ノート内容を記入'
          value={activeNote.content}
          onChange={(e) => onEditNote("content", e.target.value)}
        ></textarea>
      </div>
      <div className='app-main-note-preview'>
        <h1 className='preview-title'>{activeNote.title}</h1>
        <Markdown className="markdown-preview">
          {activeNote.content}
        </Markdown>
      </div>
    </div>
  )
}

export default Main