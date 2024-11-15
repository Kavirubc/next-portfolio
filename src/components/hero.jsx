import React from 'react';
import Image from 'next/image';
import proPic from './a.jpeg';
import { motion } from "framer-motion";
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
                className='flex flex-col mb-6'>

                <motion.div className='mb-4' variants={itemVariants}>
                    <h1 className='md:text-4xl text-2xl text-zinc-900 dark:text-zinc-100'>Kaviru <br /> Hapuarachchi</h1>
                </motion.div>

                <motion.div variants={itemVariants} className='flex md:flex-col'>
                    <p className='text-base text-slate-500 dark:text-slate-400'>BSc. in IS UCSC | Founder @ Daily Grind |Vice-Chair of IEEE CS Chapter UCSC | Violinist</p>
                </motion.div>

            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className='flex flex-col'>

                <motion.div variants={itemVariants} className='flex mb-5 rounded-full'>
                    <Image className='rounded-full' src={proPic} width={120} height={120} alt="Profile Picture" />
                </motion.div>

                <motion.div variants={itemVariants} className='flex flex-col gap-y-2 justify-between mx-4 my-6'>
                    <p className='flex items-center text-base text-slate-500 dark:text-slate-400'>
                        <span className='mr-2 text-sm'><BriefcaseBusiness /></span>Conversation Design & Content Strategy @ Convogrid.ai 
                    </p>
                    <p className='flex items-center text-base text-slate-500 dark:text-slate-400'>
                        <span className='mr-2'><Boxes /></span>MERN / NextJS / Java / Php
                    </p>
                    <p className='flex items-center text-base text-slate-500 dark:text-slate-400'>
                        <span className='mr-2'><Laugh /></span>Aspiring Product/ Project Manager
                    </p>
                </motion.div>

                <motion.div variants={itemVariants} className='mt-6 mx-4'>
                    <p className='text-base text-slate-500 dark:text-slate-400'>
                        Hello there! I am a second-year Information Systems undergraduate at the University of Colombo School of Computing (UCSC). I am passionate about project management and am currently working on learning theories related to the field of project/ product management. My background includes UI/UX, front-end development with React (NextJS), and back-end development using NodeJS, PHP, and Java. Over the past year, I&apos;ve also worked on ML projects involving CNNs, LLMs, and RAG.
                    </p>
                </motion.div>

            </motion.div>
        </>
    );
}

export default Hero;