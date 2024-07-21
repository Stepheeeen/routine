import React from 'react'
import { BottomNavbar, TopNavbar } from '../components/reusable/Navbar/Navbar'
import { AddIcon } from '../components/reusable/Button/AddIcon'

const PageContainer = ({children, navbarStyling, pageTitle, topbarStyling, className, path, addStyle}) => {
  return (
    <div className={`h-[90vh] `}>
      <TopNavbar pageTitle={pageTitle} topbarStyling={topbarStyling} />
      <main className={`pb-[70px] ${className}`}>
        {children}
      </main>
      <AddIcon path={path} addStyle={addStyle} />
      <BottomNavbar navbarStyling={navbarStyling}  />
    </div>
  )
}

export default PageContainer
