import React from 'react'
import Header from '../other/Header'
import TaskNumber from '../other/TaskNumber'
import TaskList from '../TaskList/TaskList'

function EmployeeDashBoard() {
  return (
    <div className='p-10 bg-[#1C1C1C'>
      <Header />
      <TaskNumber />
      <TaskList />
    </div>
  )
}

export default EmployeeDashBoard
