import React from 'react'
import { BottomNavbar, TopNavbar } from '../components/reusable/Navbar/Navbar'

const PageContainer = ({children, navbarStyling, pageTitle, topbarStyling}) => {
  return (
    <div>
      <TopNavbar pageTitle={pageTitle} topbarStyling={topbarStyling} />
        {children}
      <BottomNavbar navbarStyling={navbarStyling}  />
    </div>
  )
}

export default PageContainer
