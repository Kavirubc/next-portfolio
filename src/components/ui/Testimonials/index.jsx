import SectionWrapper from "../../SectionWrapper"

const Team = () => {
    const teamMembers = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>,
            name: "Shakthi Warnakulasooriya",
            title: "DevOps Engineer at IFS R&D",
            description: "A skilled DevOps engineer currently pursuing his third year in Information Technology at IIT Sri Lanka. Brings expertise in cloud infrastructure, automation, and continuous integration/deployment (CI/CD) pipelines through his work at IFS R&D."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>,
            name: "Kaviru Hapuarachchi",
            title: "Conversation Designer at ConvogridAI",
            description: "An innovative Information Systems undergraduate at the University of Colombo School of Computing with a passion for project management. Currently applying his expertise in conversation design at ConvogridAI while also co-hosting The Daily Grind."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>,
            name: "Dunith Vinsuka",
            title: "AI Specialist",
            description: "A fourth-year undergraduate specializing in Artificial Intelligence at IIT Sri Lanka. Brings cutting-edge knowledge in machine learning, data analytics, and AI implementation to drive innovative solutions for complex business challenges."
        },
    ]

    return (
        <SectionWrapper className="pb-0">
            <div id="team" className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl sm:text-center md:mx-auto">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Meet Our Team
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Bringing together expertise in DevOps, AI, and Conversation Design to deliver innovative solutions
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            teamMembers.map((item, idx) => (
                                <li key={idx} className="bg-white border p-6 rounded-xl">
                                    <figure>
                                        <div className="flex flex-col items-center gap-y-4 text-center">
                                            <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gray-50 text-blue-600">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <span className="block text-gray-800 font-semibold text-lg">{item.name}</span>
                                                <span className="block text-blue-600 text-sm mt-0.5">{item.title}</span>
                                            </div>
                                        </div>
                                        <blockquote>
                                            <p className="mt-6 text-gray-700">
                                                {item.description}
                                            </p>
                                        </blockquote>
                                    </figure>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Team