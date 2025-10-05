import React from 'react'
import Header from './header'
import Footer from './Footer'

const Layout = ({ pageTitle, children, bgColor = 'bg-white' }) => {
  return (
    <div className={`min-h-screen flex flex-col ${bgColor}`}>
      <Header pageTitle={pageTitle} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
