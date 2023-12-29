import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activePath, setActivePath] = useState('');

    // Replace when adding new links
    const links = [
       // { label: "Projects", href: "/projects" },
        { label: "Gallery", href: "/gallery" },
        { label: "Contact", href: "/contact" },
    ];

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const { pathname } = window.location;
            setActivePath(pathname);
        }
    }, []);

    const isActive = (href) => {
        return activePath === href;
    };

    const handleOnClick = () => {
        setIsMenuOpen(false);
    };

    const menuVariants = {
        open: { y: 10, opacity: 0.9, display: 'flex', transition: { duration: 0.1 } },
        closed: { y: '-100%', opacity: 0, transition: { duration: 0.1, when: "afterChildren" } },
    };

    return (
        <>
            <div className='flex flex-row items-center justify-center content-center'>
                <nav className="bg-white/90 fixed top-0 md:w-[50%] w-[100%] pt-2 z-10 rounded-xl shadow-md shadow-indigo-100 mt-3">
                    <div className="container mx-auto px-4 py-4 ">
                        <div className="flex justify-between items-center">
                            <Link href="/">
                                <div className="text-black hover:text-wave-accent cursor-pointer font-bold text-2xl mt-[2px] pl-2">KH</div>
                            </Link>

                            <ul className="hidden md:flex space-x-6 items-center content-center">
                                {links.map((link) => (
                                    <li key={link.href} className={`${isActive(link.href) ? 'bg-slate-200 rounded-xl shadow-sm' : ''}`}>
                                        <Link href={link.href} scroll={false}>
                                            <div className={`px-6 text-gray-500 hover:text-black flex flex-row justify-center cursor-pointer mx-4 max-w-[28px] py-2 ${isActive(link.href) ? 'text-gray-900' : ''}`}>
                                                <span className="hover:underline-animation">{link.label}</span>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <Link target='_blank' href="https://www.ko-de.org/">
                                <div className="md:text-indigo-400 md:hover:text-indigo-600 rounded-xl cursor-pointer">kode</div>
                            </Link>
                            <div className="md:hidden">
                                <motion.div
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="text-black hover:text-wave-accent cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-list pt-2" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M2.5 3.5A.5.5 0 0 1 3 3h10a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-.5zM2.5 7.5A.5.5 0 0 1 3 7h10a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-.5zM2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-.5z" />
                                    </svg>
                                </motion.div>
                                <AnimatePresence>
                                    {isMenuOpen && (
                                        <motion.div
                                            variants={menuVariants}
                                            initial="closed"
                                            animate="open"
                                            exit="closed"
                                            className="absolute right-0 w-1/2 mr-4  bg-white/10 backdrop-blur-md shadow-lg p-4 mt-4 rounded-3xl z-10 transition-all duration-300 ease-out flex-col justify-start max-h-[calc(100vh-70px)] ">
                                            {links.map((link, index) => (
                                                <Link href={link.href} key={link.href + index}>
                                                    <motion.div
                                                        initial={{ y: -30, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        transition={{ delay: 0.2 * index, duration: 0.1 }}
                                                        onClick={handleOnClick}
                                                        className={`text-black text-lg text-center hover:text-orange-500 cursor-pointer ${isActive(link.href) ? 'text-orange-500' : ''} py-4`}>
                                                        {link.label}
                                                    </motion.div>
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
