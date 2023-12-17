import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import React from 'react'

function index() {
  return (
    <>
      <div className='max-w-[700px]'>
        <Navbar />
      </div>
    
      <div className='mt-[70px]' style={{ minHeight: 'calc(100vh - 100px)' }}>
        
      <Hero/>
    </div>
    <Footer />
    </>
  )
}

export default index
