import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-800 text-slate-700 dark:text-slate-300">
            <div className="container mx-auto px-6 py-9">
                <div className="flex flex-col mt-4">
                    <div className="flex flex-row space-x-4 justify-center">
                        <Link href="/gallery">
                            <div className="text-sm hover:text-black dark:hover:text-white text-gray-400 dark:text-gray-500 text-center">Gallery</div>
                        </Link>
                        <Link href="/contact">
                            <div className="text-sm hover:text-black dark:hover:text-white text-gray-400 dark:text-gray-500 text-center">Contact Me</div>
                        </Link>
                        <Link target="_blank" href="https://www.ko-de.org/">
                            <div className="text-sm hover:text-black dark:hover:text-white text-gray-400 dark:text-gray-500 text-center">Projects</div>
                        </Link>
                    </div>
                    <div className="flex flex-row justify-center my-10 space-x-4">
                        <Link target="_blank" href="https://www.ko-de.org/">
                            <div className="text-sm hover:text-black dark:hover:text-white text-gray-400 dark:text-gray-500 text-center">kode</div>
                        </Link>
                        <Link target="_blank" href="https://github.com/Kavirubc">
                            <div className="text-sm hover:text-black dark:hover:text-white text-gray-400 dark:text-gray-500 text-center">Github</div>
                        </Link>
                    </div>
                    <p className="text-sm text-slate-300 dark:text-slate-500 hover:text-indigo-300 dark:hover:text-indigo-500 text-center">
                        © {new Date().getFullYear()} kode. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
