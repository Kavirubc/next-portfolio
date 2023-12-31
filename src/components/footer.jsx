import Link from "next/link";

const Footer = () => {
    return (
        <footer className=" bg-white text-slate-700">
            <div className="container mx-auto px-6 py-9 ">
                <div className="flex flex-col mt-4">


                    <div className=" flex flex-row  space-x-4 justify-center ">
                        <Link href="/gallery" ><div className="text-sm hover:text-black text-gray-400 text-center">Gallery</div></Link>
                        <Link href="/contact" ><div className="text-sm hover:text-black text-gray-400 text-center">Contact Me</div></Link>
                        <Link target="_blank" href="https://www.ko-de.org/" ><div className="text-sm hover:text-black text-gray-400 text-center">Projects</div></Link>
                    </div>
                    <div className=" flex flex-row justify-center my-10  space-x-4">
                        <Link target="_blank" href="https://www.ko-de.org/" ><div className="text-sm hover:text-black text-gray-400 text-center">kode</div></Link>
                        <Link target="_blank" href="https://github.com/Kavirubc" ><div className="text-sm hover:text-black text-gray-400 text-center">Github</div></Link>
                    </div>


                    <p className="text-sm text-slate-300 hover:text-indigo-300 text-center">© {new Date().getFullYear()} kode. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
