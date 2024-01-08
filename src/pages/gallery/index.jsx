import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';
import { motion } from 'framer-motion';
import img1 from './img1.jpg';
import img2 from './img4.jpg';
import img3 from './img7.jpg';
import img4 from './img2.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg';
import img7 from './img3.jpeg';
import img8 from './img8.jpg';
import img9 from './img9.jpg';
import img10 from './img10.jpg';
import img11 from './img11.jpeg';
import img12 from './img12.jpg';
import Image from 'next/image';

function Index() {
    const images = [img4, img5, img6, img7, img8, img9, img1, img2, img3, img10, img11, img12];

    // Animation variants for Framer Motion
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <>
            <head>
                <title>KH | Gallery</title>
            </head>
            <Navbar />
            <div className='text-center text-xl text-slate-800 my-5 md:mt-[150px] mt-[120px]'>Gallery</div>
            <div className='px-4 sm:px-6 lg:px-8 py-5 mx-auto max-w-7xl'>
                <motion.div
                    className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            className='overflow-hidden rounded-2xl shadow-lg aspect-w-16 aspect-h-9 group relative'
                            variants={itemVariants}
                        >
                            <Image src={src} alt={`img ${index + 1}`}
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                className='transition-transform duration-200 ease-in-out' />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <Footer />

            <style jsx>{`
                .grid > div:hover {
                    opacity: 1;
                    z-index: 10;
                }

                .grid:hover > div:not(:hover) {
                    opacity: 0.5;
                }
            `}</style>
        </>
    );
}

export default Index;
