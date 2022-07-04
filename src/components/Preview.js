import React from 'react'

const Preview = ({ previewText, markup}) => {
  return (
    <div id='preview1'>
      <div className='preview-bar'>
        <h2>Preview</h2>
      </div>
      <div className='preview-view' dangerouslySetInnerHTML={markup} id='preview'></div>

    </div>
  )
}

export default Preview