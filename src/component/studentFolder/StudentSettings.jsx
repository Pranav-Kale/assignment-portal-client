import React from 'react'
import { Link } from 'react-router-dom'

function StudentSettings() {
  return (
    <div className='w-full sm:h-full  p-2'>
      <div className='w-full h-full rounded-md bg-white p-2'>
        <button className='mt-4 rounded-md text-white bg-red-600 hover:bg-red-500'><Link to='/'>Logout</Link></button>
      </div>
    </div>
  )
}

export default StudentSettings