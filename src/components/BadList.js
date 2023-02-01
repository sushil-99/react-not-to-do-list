import React from 'react'

const BadList = ({badList, taskSwitcher, handleDelete, handleSelect}) => {
    const totalBadHrs = badList.reduce((acc, item) => acc + +item.hr, 0)

  return (
    <div className="col-md">BadList
        <h2 className='text-center'></h2>
        <hr />

        <table className="table table-striped table-hover">
            <tbody>
                {badList.map((item) =>(
                
                    <tr key={item._id}>
                        <td>
                            <input type="checkbox" className="form-check-input" value={item._id} onChange={handleSelect}/>
                        </td>
                        <td className="text-center">{item.task}</td>
                        <td className="text-end">{item.hr} hrs</td>
                        <td className="d-flex gap-2 justify-content-end">
                            <button onClick={() => taskSwitcher(item._id, "entry")}className="btn btn-warning">
                                <i className="fa-solid fa-left-long"></i>
                            </button>
                            <button onClick={() => handleDelete(item._id)} className="btn btn-danger">
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </td>

                    </tr>
                ))}
            </tbody>
        </table>

        <div className="text-end fw-bold">You can save upto {totalBadHrs} hr(s)</div>
    </div>
  )
}

export default BadList