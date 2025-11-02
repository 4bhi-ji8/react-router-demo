import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Users() {
  const navigate =  useNavigate()
  const users = [
    {
      id : 1,
      name : "Jacob",
      email : "jacob@gmail.com",
      image : "https://i.pinimg.com/736x/0b/9c/47/0b9c470317f01eac1e554cd7e840dae1.jpg"
    },
    {
      id : 2,
      name : "Arun",
      email : "arun@gmail.com",
      image : "https://i.pinimg.com/736x/0b/9c/47/0b9c470317f01eac1e554cd7e840dae1.jpg"
    },
    {
      id : 3,
      name : "Goerge",
      email : "goerge@gmail.com",
      image : "https://i.pinimg.com/736x/0b/9c/47/0b9c470317f01eac1e554cd7e840dae1.jpg"
    },
    {
      id : 4,
      name : "Asif",
      email : "asif@gmail.com",
      image : "https://i.pinimg.com/736x/0b/9c/47/0b9c470317f01eac1e554cd7e840dae1.jpg"
    }

  ]
  return (
    <div className='pt-24 flex flex-col items-center'>
      <h2 className='text-3xl font-bold mb-6'>Users List</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6'>
        {users.map(user =>(
          <div key={user.id} className="bg-white shadow-md rounded-lg p-4 w-80 text-center hover:scale-105 transition-transform duration-300  hover:shadow-lg transition">
            {user.image && <img src={user.image} alt={user.name} className='w-24 h-24 rounded-full mx-auto mb-3 border border-black' />}
            <h3 className='text-xl font-semibold'>{user.name}</h3>
            <p className='text-gray-500'>{user.email}</p>
            <Link to={`/users/${user.id}`}>
            <button onClick={() => navigate("/userdetails")} className='mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 '>view Details</button>
            </Link>
          </div>
        ))}
      </div>
      <button onClick={() => navigate("/")} className="bg-white px-6 py-3 rounded-lg font-semibold transition text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white my-10">
        Back to Home
      </button>
    </div>
  )
}

export default Users