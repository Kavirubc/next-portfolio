import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"
import ctaImage from "../../../public/cta-image.jpg" // You'll need to update this image
import Image from "next/image"

const CTA = () => {
    return (
        <SectionWrapper id="cta" className="pb-0">
            <div className="custom-screen">
                <div className="items-center gap-x-12 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <Image
                            src={ctaImage}
                            className="rounded-lg md:max-w-lg"
                            alt="Data-driven insights and market research solutions"
                        />
                    </div>
                    <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
                        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Transform Data into Strategic Business Decisions
                        </h2>
                        <p className="mt-3 text-gray-600">
                            At Standord Labs, we empower businesses with comprehensive market research,
                            analytics, and content solutions. Our data-driven approach helps you understand
                            your market, engage your audience, and make informed decisions that drive growth.
                        </p>
                        <div className="mt-4 flex gap-x-3">
                            <NavLink
                                href="/get-started"
                                className="inline-block font-medium text-sm text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
                            >
                                Start Your Research
                            </NavLink>
                            <NavLink
                                href="/services"
                                className="inline-block font-medium text-sm text-gray-700 border hover:bg-gray-50"
                            >
                                Explore Services
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CTA