import React from "react";
import { useParams, Link,useNavigate } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const users = [
    {
      id: 1,
      name: "Jacob",
      email: "jacob@gmail.com",
      image: "https://i.pinimg.com/736x/0b/9c/47/0b9c470317f01eac1e554cd7e840dae1.jpg",
      age: 26,
      city : "kottayam"
    },
    {
      id: 2,
      name: "Arun",
      email: "arun@gmail.com",
      image: "https://i.pinimg.com/736x/0b/9c/47/0b9c470317f01eac1e554cd7e840dae1.jpg",
      age: 24,
      city : "Kannur"
    },
    {
      id: 3,
      name: "Goerge",
      email: "goerge@gmail.com",
      image: "https://i.pinimg.com/736x/0b/9c/47/0b9c470317f01eac1e554cd7e840dae1.jpg",
      age: 25,
      city : "Ernakulam"
    },
    {
      id: 4,
      name: "Asif",
      email: "asif@gmail.com",
      image: "https://i.pinimg.com/736x/0b/9c/47/0b9c470317f01eac1e554cd7e840dae1.jpg",
      age: 24,
      city : "kasargod"
    },
  ];

  const user = users.find(u => u.id === Number(id))
    if (!user) return <h2 className="pt-24 text-center text-red-600">User not found!</h2>

  return (
    <div className="pt-24 flex flex-col items-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96 text-center">
        <img src={user.image} alt={user.name} className='w-24 h-24 rounded-full mx-auto mb-3 border border-black' />
        <p className="text-lg"><b>Name : </b>{user.name}</p>
        <p className="text-lg"><b>Email : </b>{user.email}</p>
        <p className="text-lg"><b>Age : </b>{user.age}</p>
        <p className="text-lg"><b>City : </b>{user.city}</p>
      </div>
      <button onClick={() => navigate("/users")} className="bg-white px-6 py-3 rounded-lg font-semibold transition text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white my-10">
        Back to Users
      </button>
    </div>
  )
}

export default UserDetails;
