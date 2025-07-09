import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import TaskTable from './components/TaskTable'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[1440px] min-h-[1024px]">
        <Navbar />
        <div className="h-px text-[#f6f6f6] w-full border mt-2"></div>
        <Header />
        <TaskTable />
        <Footer/>
      </div>
    </div>
  )
}

export default App
