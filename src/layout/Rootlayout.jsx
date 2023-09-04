import React from 'react'
import Navbar from '../components/Navbar'
import Section6 from '../components/Section6'

const Rootlayout = ({children}) => {
  return (
    <div className=' max-w-screen-2xl w-full mx-auto '>
      <Navbar/>
      {children}
      <Section6/>
    
    </div>
  )
}

export default Rootlayout