import React from 'react'
export default function Popup(props) {
  return (props.trigger) ? ( //boolean function, if popup is triggered than divs will show
    <div className='popup'>
      <div className='popup-inner'>
        <button className='close-btn' onClick = {()=> props.setTrigger(false)}>close</button>
        {props.children}
      </div>
    </div>
  ) :""; //if not true, nothing will show
}
