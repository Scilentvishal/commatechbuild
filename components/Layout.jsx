import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <div className='relative'>
      <Head>
      <link rel="icon" href="/commatechfav.png" />
      </Head>
        <Navbar />
        {children}
        <Footer />
        </div>
  )
}


export default Layout