import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Home from '../../../assets/icons/homeIcon.svg'
import HomeActive from '../../../assets/icons/homeIconActive.svg'
import Task from '../../../assets/icons/taskIcon.svg'
import TaskActive from '../../../assets/icons/taskIconActive.svg'
import Calender from '../../../assets/icons/calenderIcon.svg'
import CalenderActive from '../../../assets/icons/calenderIconActive.svg'
import Note from '../../../assets/icons/noteIcon.svg'
import NoteActive from '../../../assets/icons/noteIconActive.svg'

const TopNavbar = ({ topbarStyling, pageTitle }) => {
  return (
    <div className={`p-2 py-5 flex justify-center items-center ${topbarStyling}`}>
      <h1 className='text-[20px] font-[600]'>{pageTitle}</h1>
    </div>
  )
}

const BottomNavbar = ({ navbarStyling }) => {
  const location = useLocation();

  return (
    <div className={`fixed bg-white bottom-0 m-auto w-full p-6 shadow flex items-center justify-between z-10 ${navbarStyling}`}>
      <Link to='/'>
        <img src={location.pathname === '/' ? HomeActive : Home} alt="home" />
      </Link>
      <Link to='/task'>
        <img src={location.pathname === '/task' ? TaskActive : Task} alt="Task" />
      </Link>
      <Link to='/calender'>
        <img src={location.pathname === '/calender' ? CalenderActive : Calender} alt="Calender" />
      </Link>
      <Link to='/note'>
        <img src={location.pathname === '/note' ? NoteActive : Note} alt="Note" />
      </Link>
    </div>
  )
}

export { TopNavbar, BottomNavbar }
