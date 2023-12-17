import React from 'react'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Bloglist from '@/components/bloglist'

function index() {
  return (
    <>
    <div className='max-w-[700px]'>
        <Navbar />
      </div>
          <div className='mt-[100px]' style={{ minHeight: 'calc(100vh - 100px)' }}>
            <Bloglist/>
            </div>
            <Footer />
    </>
    
  )
}

export default index
