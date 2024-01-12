import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'
import Head from 'next/head'
import Script from 'next/script';

function Form() {
    return (
        <>
            <Head>
                <title>KH | Form</title>
            </Head>
            <div className='flex flex-row justify-center'>
                <Navbar />
            </div>
            
            <div className='min-h-screen flex flex-col items-center justify-center'>
                <p>Takes few seconds to load.</p>
                <div className='max-w-4xl w-full p-4 md:p-4'>
                    <div data-tf-live="01HKYFB5HGMHDTHK54AAYK1QFR"></div>
                    {/* Load the script asynchronously using next/script */}
                    <Script src="//embed.typeform.com/next/embed.js" strategy="lazyOnload" />
                </div>
            </div>
            <Footer />
        </>
    )
}




export default Form
