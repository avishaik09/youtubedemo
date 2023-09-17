import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
const Sidebar = () => {

  const isSidebarOpen=useSelector((store)=>store.sidebar.isSidebarOpen);

  if(!isSidebarOpen) return null;
  return (
    <div className='px-5 py-5 h-[100%] shadow-lg w-36 col-span-1'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>Trending</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
    <h1 className='font-bold pt-5'>Subscripion</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar
