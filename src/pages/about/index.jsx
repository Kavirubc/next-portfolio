import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'

function index() {
    return (
        <>
            <div className='flex flex-row justify-center'>
                <Navbar />
            </div>
            <div className='mt-[70px]' style={{ minHeight: 'calc(100vh - 100px)' }}>
                <div className="px-6 md:px-6 pt-16 pb-24 md:pt-20 md:pb-44 max-w-[700px] mx-auto">
                This is about
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default index
