import './SelectModal.css'

import React from 'react'
import Backdrop from '../Backdrop/Backdrop'

const SelectModal = ({show, clickBackdrop}) => {
  return (
    <div>
        <Backdrop BackdropShow={show} clickBackdrop={clickBackdrop}/>
        <div className='select-modal-container' style={{transform: show? 'translateY(0)': 'translateY(-100vh)', opacity: show ? '1': '0'}}>
        <h4 className='select-modal-text'>Please Select a Plan</h4>
    </div>
    </div>
  )
}

export default SelectModal