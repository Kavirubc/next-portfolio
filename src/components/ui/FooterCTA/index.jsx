import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"

const FooterCTA = () => (
    <SectionWrapper>
        <div className="custom-screen">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Ready to Transform Your Business?
                </h2>
                <p className="mt-3 text-gray-600">
                    Let's work together to unlock valuable insights and drive your business growth through expert research, analytics, and strategic solutions.
                </p>
                <div className="mt-6 flex items-center justify-center gap-x-3">
                    <NavLink
                        href="/get-started"
                        className="inline-block font-medium text-sm text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                    >
                        Get Started
                    </NavLink>
                    <NavLink
                        href="/get-started#services"
                        className="inline-block font-medium text-sm text-gray-700 border hover:bg-gray-50 px-6 py-3 rounded-lg transition-all duration-200"
                    >
                        Learn More
                    </NavLink>
                </div>
                <div className="mt-8 flex flex-col items-center space-y-2 text-sm text-gray-500">
                    <p>
                        Have questions? We're here to help!
                    </p>
                    <div className="flex items-center gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <NavLink
                            href="/get-started"
                            className="text-blue-600 hover:text-blue-500 font-medium"
                        >
                            Contact Our Team
                        </NavLink>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t">
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 items-center">
                        <div className="flex items-center gap-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-sm text-gray-600">Expert Research Team</span>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-sm text-gray-600">Data-Driven Insights</span>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-sm text-gray-600">Strategic Solutions</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </SectionWrapper>
)

export default FooterCTA