import React, { useState } from 'react'
import { randomId } from '../utils/randomidGenerator'

const Form = ({taskEntry}) => {
    const [formData, setFormData] = useState({})

    const handleChange = (e) =>{
        const {name, value} = e.target

        setFormData({
            ...formData, [name]:value, type:"entry"
        })

    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        taskEntry({...formData, _id: randomId() })
      }

      const handleInvChar =(e) =>{
        let invalidChar = ["e", "E", "+", "-"]
        invalidChar.includes(e.key) && e.preventDefault()
      }

// console.log(formData)

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="row mt-3 g-2">
                <div className="col-md-6">
                    <input type="text" className="form-control" name="task" required placeholder="Task" 
                    onChange={handleChange}></input>
                </div>
                
                <div className="col-md-3">
                    <input type="number" min={1} className="form-control" name="hr" required placeholder="Hours"
                    onChange={handleChange} onKeyDown={handleInvChar}></input>
                </div>
                
                <div className="col-md-3">
                    <button className="btn btn-primary">
                        <i className="fa-solid fa-plus"></i>
                        Add New Task
                    </button>
                </div>

            </div>
        </form>
    </div>
  )
}

export default Form