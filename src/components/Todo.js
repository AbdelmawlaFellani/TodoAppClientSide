import React from 'react'

function Todo() {
  return (
    <div className='todo'>
            <h2>Todo's Ttile</h2>
            <p>Todo's Description</p>
            <div>
                <button>Edit<i>Edit Icon</i></button>
                <button>Delete<i>Delete Icon</i></button>
                <button>Complete<i>Complete Icon</i></button>
            </div>
    </div>
  )
}

export default Todo