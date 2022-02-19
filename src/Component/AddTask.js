import React, { useState } from 'react';

const AddTask = ({onAdd}) => {
   const [text,setText] =useState('');
   const [day,setDay]=useState('');
   const [reminder,setReminder] = useState(false);

const onSubmit = (e) =>{
    e.preventDefault()

    if(!text){
        alert('Please ass a tesk');
        return
    }
    onAdd({text, day, reminder })
    setText('')
    setDay('')
    setReminder(false)
} 

  return( <div>
      <form className='add-form' onSubmit={onSubmit}>
          <div className='form-control'>
              <lebel>Task</lebel>
              <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Add Task'/>
          </div>
          <div className='form-control'>
              <lebel>Time</lebel>
              <input type='text' value={day} onChange={(e) => setDay(e.target.value)} placeholder='Add Time'/>
          </div>
          <div className='form-control from-control-check'>
              <lebel>Set Remainder</lebel>
              <input type='checkbox' checked={reminder}  value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
          </div>

          <input type='submit' value='save Taask' className='btn btn-black'/>
      </form>
  </div>);
};

export default AddTask;
