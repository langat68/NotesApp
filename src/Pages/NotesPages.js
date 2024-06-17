import React from 'react'
import notes from '../assets/data'

const NotesPages = () => {
  return (
    <div>
      Notes pages
      <div className='notes-list'>
        {
            notes.map((notes) => {
              return (
                <div className='note'>
                  <h3>{notes.title}</h3>
                  <p>{notes.body}</p>
                </div>
              )
            })
        }

      </div>
    </div>
  )
}

export default NotesPages;
