import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'

const App = () => {
  return (
    <div className='w-full'>
      <Navbar/>
      <div className="h-px text-[#f6f6f6] w-full border mt-2"></div>
      <Header/>
    </div>
  )
}

export default App
