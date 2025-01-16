import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({children}) {
  return (
    <>
     <Header></Header>
      <main style={{ minHeight: "80vh" }}>
        {children}
      </main>
      <Footer></Footer>
    </>
  )
}

export default Layout