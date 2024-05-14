import React from 'react';
import Image from 'next/image';
import proPic from './a.jpeg';
import { motion } from "framer-motion";
//import lucid icons
import { Boxes, BriefcaseBusiness, Laugh } from 'lucide-react';

function Hero() {
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.4
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className='flex flex-col mb-5'>

                <motion.div className='mb-2' variants={itemVariants}>
                    <h1 className='md:text-4xl text-2xl text-zinc-900'>Kaviru <br /> Hapuarachchi</h1>
                </motion.div>

                <motion.div variants={itemVariants} className='flex md:flex-col'>
                    <p className='text-base text-slate-500'>Undergraduate at University of Colombo School of computing</p>
                </motion.div>

            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className='flex flex-col '>

                <motion.div variants={itemVariants} className='flex mr-5 rounded-full '>

                    <Image className='rounded-full h-[100]' src={proPic} width={120} height={120} />


                </motion.div>
                <motion.div variants={itemVariants} className='mr-10 flex flex-col gap-y-1 justify-between mx-2 my-5'>
                    <p className='flex flex-row text-base text-slate-500 items-center'><span className='mr-2 text-sm'><BriefcaseBusiness /></span>Founder - kode</p>
                    <p className='flex flex-row text-base text-slate-500 items-center'><span className='mr-2'><Boxes/></span>The Daily Grind</p>
                    <p className='flex flex-row text-base text-slate-500 items-center'><span className='mr-2'><Laugh/></span>PM, MERN, Productivity</p>


                </motion.div>
                <motion.div variants={itemVariants} className='mt-4'>
                    <p className='text-base text-slate-500 text-left mr-10 pb-1'>
                        Hi, I am Kaviru H, a IS Undergraduate who loves building cool things with code. In addition to coding, I also work on my startup kode.
                    </p>
                </motion.div>

            </motion.div>
        </>
    );
}

export default Hero;
