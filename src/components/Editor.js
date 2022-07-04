import React from 'react'

const Editor = ({ text, handleChange }) => {
  return (
    <div id='editor1'>
      <div className='editor-bar'>
        <h2>Editor</h2>
      </div>
      <textarea onChange={handleChange} value={text} id='editor'></textarea>
      </div>
  )
}

export default Editor