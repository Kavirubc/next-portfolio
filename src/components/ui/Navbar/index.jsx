import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Brand from '../Brand'
import NavLink from '../NavLink'

const Navbar = () => {
    const [state, setState] = useState(false)
    const { events } = useRouter();

    const navigation = [
        { title: "Services", path: "#services" },
        { title: "Who We Help", path: "#who-we-help" },
        { title: "Our Team", path: "#team" },
    ]

    useEffect(() => {
        // Close the navbar menu when navigate
        const handleState = () => {
            document.body.classList.remove("overflow-hidden")
            setState(false)
        }
        events.on("routeChangeStart", () => handleState());
        events.on("hashChangeStart", () => handleState());
    }, [])

    const handleNavMenu = () => {
        setState(!state)
        document.body.classList.toggle("overflow-hidden")
    }

    return (
        <header className="sticky top-0 z-50">
            <nav className={`bg-white w-full md:static md:text-sm ${state ? "fixed z-10 h-full" : ""} shadow-sm`}>
                <div className="custom-screen items-center mx-auto md:flex">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link href="/" className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                            </svg>
                            <span className="text-gray-800 font-bold text-lg">Standord Labs</span>
                        </Link>
                        <div className="md:hidden">
                            <button
                                role="button"
                                aria-label="Open the menu"
                                className="text-gray-500 hover:text-gray-800"
                                onClick={handleNavMenu}
                            >
                                {
                                    state ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>
                                    )
                                }
                            </button>
                        </div>
                    </div>
                    <div className={`flex-1 pb-3 mt-8 md:pb-0 md:mt-0 md:block ${state ? "" : "hidden"}`}>
                        <ul className="text-gray-700 justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0 md:text-gray-600 md:font-medium">
                            {
                                navigation.map((item, idx) => {
                                    return (
                                        <li key={idx} className="duration-150 hover:text-gray-900">
                                            <Link
                                                href={item.path}
                                                className="block"
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                            <li>
                                <NavLink
                                    href="/get-started"
                                    className="block font-medium text-sm text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 md:inline"
                                >
                                    Get Started
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar