import React from 'react'
import { BottomNavbar, TopNavbar } from '../components/reusable/Navbar/Navbar'

const PageContainer = ({children, navbarStyling, pageTitle, topbarStyling, className}) => {
  return (
    <div className={`h-[100vh]`}>
      <TopNavbar pageTitle={pageTitle} topbarStyling={topbarStyling} />
      <main className={className}>
        {children}
      </main>
      <BottomNavbar navbarStyling={navbarStyling}  />
    </div>
  )
}

export default PageContainer
