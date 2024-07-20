import React from 'react'
import { Link } from 'react-router-dom'

const TopNavbar = ({topbarStyling, pageTitle}) => {
  return (
    <div className={`p-2 py-5 ${topbarStyling}`}>
      <h1 className='text-[27px] font-[600]'>{pageTitle}</h1>
    </div>
  )
}

const BottomNavbar = ({navbarStyling}) => {
  return (
    <div className={`${navbarStyling}`}>
      <Link to={'/authentication'}>Signup</Link>
    </div>
  )
}

export {TopNavbar, BottomNavbar}