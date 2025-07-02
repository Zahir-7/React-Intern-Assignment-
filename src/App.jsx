import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import TaskTable from './components/TaskTable'

const App = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[1300px]">
        <Navbar />
        <div className="h-px text-[#f6f6f6] w-full border mt-2"></div>
        <Header />
        <TaskTable />
      </div>
    </div>
  )
}

export default App
