import React from 'react'
import { BottomNavbar, TopNavbar } from '../components/reusable/Navbar/Navbar'

const PageContainer = ({children, navbarStyling, pageTitle, topbarStyling}) => {
  return (
    <div className='h-[100vh]'>
      <TopNavbar pageTitle={pageTitle} topbarStyling={topbarStyling} />
        {children}
      <BottomNavbar navbarStyling={navbarStyling}  />
    </div>
  )
}

export default PageContainer
