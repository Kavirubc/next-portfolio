import React from 'react'

function Contact() {
    return (
        <div className='border flex flex-row justify-evenly'>
            <div className='flex flex-col'>
                <div className='border px-10 md:px-32 m-3 py-7 flex items-center'>
                    <span className='mr-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path><path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path></svg></span>Email
                </div>
                <div className='border px-10 md:px-32 m-3 py-7'>
                    <img width={20} src="https://icons8.com/icon/78382/phone" alt="" /> Phone
                </div>
                <div className='border px-10 md:px-32 m-3 py-7'>
                    Linkedin
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='border px-10 md:px-32 m-3 py-7'>
                    Facebook
                </div>
                <div className='border px-10 md:px-32 m-3 py-7 flex items-center'>
                    <span className='mr-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path><path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path></svg></span>kode
                </div>
                
                <div className='border px-10 md:px-32 m-3 py-7'>
                    InstagramP
                </div>
            </div>
        </div>
    )
}

export default Contact