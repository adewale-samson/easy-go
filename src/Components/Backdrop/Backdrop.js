import './Backdrop.css'

import React from 'react'

const Backdrop = ({BackdropShow, clickBackdrop}) => {
  return (
    BackdropShow ? <div className='backdrop-container' onClick={clickBackdrop}>

    </div> : ''
  )
}

export default Backdrop