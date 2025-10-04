import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header pageTitle={pageTitle} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout


