

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'

function Form() {
    return (
        <>
            <div className='flex flex-row justify-center'>
                <Navbar />
            </div>
            <div className='min-h-screen flex items-center justify-center'>

                <div className='max-w-4xl w-full p-4 md:p-4'>

                    <div data-tf-live="01HKMX0YG60T883G8RS680APE2"></div>
                    <script src="//embed.typeform.com/next/embed.js"></script>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Form
