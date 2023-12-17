import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'

function index() {
    return (
        <>
            <div className='flex flex-row justify-center'>
                <Navbar />
            </div>
            <div className='' style={{ minHeight: 'calc(100vh - 100px)' }}>
                <div className="flex items-center justify-center min-h-screen">
                    <div className="px-6 md:px-6 pt-16 pb-24 md:pt-20 md:pb-44 max-w-[700px] mt-[50px]">
                        <Contact />
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default index
