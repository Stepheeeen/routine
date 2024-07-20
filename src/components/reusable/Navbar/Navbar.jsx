import React from 'react'

const TopNavbar = ({topbarStyling, pageTitle}) => {
  return (
    <div className={`p-2 ${topbarStyling}`}>
      <h1 className='text-[27px] font-[600]'>{pageTitle}</h1>
    </div>
  )
}

const BottomNavbar = ({navbarStyling}) => {
  return (
    <div className={`${navbarStyling}`}>Navbar</div>
  )
}

export {TopNavbar, BottomNavbar}