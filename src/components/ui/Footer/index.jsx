const Footer = () => (
    <footer className="bg-white">
        <div className="custom-screen pt-16">
            <div className="mt-10 py-10 border-t flex flex-col items-center justify-center">
                <div className="flex items-center gap-3 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                    <span className="text-gray-800 font-semibold">Standord Labs</span>
                </div>
                <p className="text-gray-600 text-sm text-center">
                    © {new Date().getFullYear()} Standord Labs. All rights reserved.
                </p>
                {/* Social media section commented out for now
                <div className="flex items-center gap-x-6 text-gray-400 mt-6">
                    {
                        socialInfo.map((item, idx) => (
                            <a key={idx} href={item.href} aria-label="social media" target="_blank" rel="noreferrer">
                                {item.icon}
                            </a>
                        ))
                    }
                </div>
                */}
            </div>
        </div>
    </footer>
)

export default Footer