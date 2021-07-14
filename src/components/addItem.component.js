import React, { forwardRef } from 'react';
import './addItem.css'

const AddItem = React.forwardRef((props, ref) => {
    return (
      <div className="addItemContainer">
        <input type="text" ref={ref} onChange={props.inputChange} placeholder={props.placeholder} />
        <button className='button' onClick={props.buttonHandler}>Add</button>
      </div>
    );
})

export default AddItem