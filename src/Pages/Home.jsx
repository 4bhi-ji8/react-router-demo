import React from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center  min-h-screen bg-slate-50 pb-10 pt-24">
      <h2 className='text-3xl md:text-4xl font-bold text-slate-800 mb-4'>Welcome to React Router Demo</h2>
      <p className='text-gray-700 text-lg max-w-2xl mb-6'>Explore seamless navigation between pages with React Router.</p>
      <div className='my-9 flex justify-between space-x-3'>
         <button onClick={() => navigate("/users")} className='bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition text-blue-600 border border-white hover:bg-blue-700'>Users</button>
        <button onClick={() => navigate("/About")} className='bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition text-blue-600 border border-white hover:bg-blue-700' >About</button>
       
      </div>
    </div>
  )
}

export default Home