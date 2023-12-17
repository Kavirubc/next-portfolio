import React from 'react'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Bloglist from '@/components/bloglist'

function index() {
  return (
    <>
      <div className='flex flex-row justify-center'>
        <Navbar />
      </div>
          <div className='px-6 md:px-6 pt-16 pb-24 md:pt-20 md:pb-44 max-w-[700px] mx-auto' style={{ minHeight: 'calc(100vh - 100px)' }}>
            <Bloglist/>
            </div>
            <Footer />
    </>
    
  )
}

export default index
