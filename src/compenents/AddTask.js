import { useState } from "react"

const AddTask = ( {onAdd}) => {
    const [text, setText] = useState('')
    const [day, setday] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) {
            alert('Please add a text')
            return
        }
        if(!day) {
            alert('Please add a day')
            return
        }
        onAdd({text, day, reminder})
        setText('')
        setday('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Add a Task</label>
                <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Day & day</label>
                <input type='text' placeholder='Add The Day and the day' value={day} onChange={(e) => setday(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Remind Me? </label>
                <input type='checkbox'  value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} checked={reminder}/>
            </div>
            <input type='submit' value='Add Task' className='btn btn-block'/>
        </form>
    )
}

export default AddTask
