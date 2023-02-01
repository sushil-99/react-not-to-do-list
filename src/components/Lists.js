import React from 'react'
import BadList from './BadList'
import TaskList from './TaskList'

const Lists = ({ tasks, taskSwitcher, handleDelete, handleSelect }) => {
    const entryList = tasks.filter((item) => item.type === "entry")
    const badList = tasks.filter((item) => item.type === "bad")
  return (
    <div className="row mt-5 g-2">
        <TaskList entryList={entryList} taskSwitcher={taskSwitcher} handleDelete={handleDelete} handleSelect={handleSelect}/>
        <BadList badList = {badList} taskSwitcher={taskSwitcher} handleDelete={handleDelete} handleSelect={handleSelect} />
    </div>
  )
}

export default Lists