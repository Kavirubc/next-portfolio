import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HOC from '../components/hoc.png'
import medium from '../../public/mico.png'

function index() {
  return (
    <>
        <Navbar />
    

      <div className=' md:mt-[70px] mt-[70px]' style={{ minHeight: 'calc(100vh - 100px)' }}>
        <div className="px-6 md:px-6 pt-16 pb-24 md:pt-20 md:pb-44 max-w-[700px] mx-auto">
          <Hero />
          <div className='mt-4'>
            <p className='text-base text-slate-500 text-left mr-10 pb-1 '>
              Hi, I am Kaviru H, a IS Undergraduate who loves building cool things with code. In addition to coding, I also work on my startup kode. 
            </p>
          </div>
          <div className=' mt-5 border-t-2'>
            <h2 className='text-lg text-gray-600 text-left mt-4'>Latest Work</h2>

            <div className='flex flex-col gap-y-8 mt-8  group'>
              <div className=' py-2 px-2 shadow-md rounded-lg group-hover:scale-[1] group-hover:hover:scale-105 transition duration-200 ease-in-out'>
                <div className='flex flex-col md:flex-row content-center gap-x-5'>
                  <Image className=' m-2 rounded-2xl' src={medium} width={80} height={80} />
                  <div className='flex flex-col mt-2 '>
                    <h2 className='text-base text-slate-600'>Blog - Last week of December <span className='ml-2 text-purple-800'> <Link target='_black'  href='https://medium.com/@kaviru/last-week-of-december-9d21198c96cd'>View</Link></span></h2>
                    <p className='text-sm text-slate-500'>So precisely about a year ago, I took one of my life’s life-changing decisions. At the time, I was an engineering undergraduate at ECU who was thinking about ...</p>
                  </div>
                </div>
              </div>

            </div>
              <div className='flex flex-col gap-y-8 mt-8  group'>
              <div className=' py-2 px-2 shadow-md rounded-lg group-hover:scale-[1] group-hover:hover:scale-105 transition duration-200 ease-in-out'>
                <div className='flex flex-col md:flex-row content-center gap-x-5'>
                  <Image className=' m-2 rounded-2xl' src={HOC} width={80} height={80} />
                  <div className='flex flex-col mt-2 '>
                    <h2 className='text-base text-slate-600'>ACM - Hour of Code <span className='ml-2 text-purple-800'> <Link target='_black' href='https://acm.ko-de.org/'>Visit the page</Link></span></h2>
                    <p className='text-sm text-slate-500'>This year, we are taking Hour of Code to new heights by offering coding opportunities that encompass both artificial intelligence AI and non-AI components.</p>
                  </div>
                </div>
              </div>
              
            </div>
            
          </div>
          
          
        </div>
      </div>

      <Footer />
    </>
  )
}

export default index
