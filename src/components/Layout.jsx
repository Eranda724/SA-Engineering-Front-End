import React from 'react'
import Header from './header'
import Footer from './Footer'

const Layout = ({ pageTitle, changePage, children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header pageTitle={pageTitle} changePage={changePage} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout


