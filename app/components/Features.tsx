import Image from "next/image";
import Feature1 from "../../public/assets/feature-1.svg";
import Feature2 from "../../public/assets/feature-2.svg";
import Feature3 from "../../public/assets/feature-3.svg";
import Check from "../../public/assets/check.svg";
import BlurArrow from "../../public/assets/blue-button.svg";
import GreenButton from "../../public/assets/green-button.svg";
import PinkButton from "../../public/assets/pink-button.svg";

export function Features() {
    return(
        <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]">
            <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
                <Image src={Feature1} alt="Feature1" className="hidden w-1/2 sm:block"/>
                <div className="sm:w=1/2 lg:py-[56px] lg:pr-[56px]">
                    <h3 className="font-medium text-[#0085FF] lg:text-[18px]">Sales Monitoring</h3>
                    <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] leading-[58px]">
                        Simplify your sales monitoring
                    </h1>
                    <Image src={Feature1} alt="Feature1" className="pt-[24px] sm:hidden"/>
                    <p className="py-[24px] text-[#36485C] lg:text-[18px]">
                        Stay on top of things an revamp your work process with our game-changing feature. Get a birds eye view with our customizable dashboard.
                    </p>
                    <ul className="flex flex-col gap-y-3 lg:text-[18px]">
                        <li className="flex items-center gap-x-2 text-[#36485C]">
                            <span>
                                <Image src={Check} alt="Check" />
                            </span>
                            Aesthetic and Minimalist Design
                        </li>
                        <li className="flex items-center gap-x-2 text-[#36485C]">
                            <span>
                                <Image src={Check} alt="Check" />
                            </span>
                            Enhance user engagement
                        </li>
                        <li className="flex items-center gap-x-2 text-[#36485C]">
                            <span>
                                <Image src={Check} alt="Check" />
                            </span>
                            Advanced typography
                        </li>
                    </ul>
                    <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#0085FF] lg:text-[18px]">
                        Learn More
                        <span>
                            <Image src={BlurArrow} alt="BlurArrow" />
                        </span>
                    </p>
                </div>
            </div>


            <div className="flex flex-col gap-x-6 sm:flex-row">
                <Image src={Feature2} alt="Feature1" className="hidden w-1/2 sm:block"/>
                <div className="sm:w=1/2 lg:py-[56px] lg:pl-[56px]">
                    <h3 className="font-medium text-[#00A424] lg:text-[18px]">CustomerSupport</h3>
                    <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] leading-[58px]">
                        Get in touch with your customer
                    </h1>
                    <Image src={Feature2} alt="Feature1" className="pt-[24px] sm:hidden"/>
                    <p className="py-[24px] text-[#36485C] lg:text-[18px]">
                        Stay on top of things an revamp your work process with our game-changing feature. Get a birds eye view with our customizable dashboard.
                    </p>
                    <ul className="flex flex-col gap-y-3 lg:text-[18px]">
                        <li className="flex items-center gap-x-2 text-[#36485C]">
                            <span>
                                <Image src={Check} alt="Check" />
                            </span>
                            Aesthetic and Minimalist Design
                        </li>
                        <li className="flex items-center gap-x-2 text-[#36485C]">
                            <span>
                                <Image src={Check} alt="Check" />
                            </span>
                            Enhance user engagement
                        </li>
                        <li className="flex items-center gap-x-2 text-[#36485C]">
                            <span>
                                <Image src={Check} alt="Check" />
                            </span>
                            Advanced typography
                        </li>
                    </ul>
                    <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#00A424] lg:text-[18px]">
                        Learn More
                        <span>
                            <Image src={GreenButton} alt="GreenButton" />
                        </span>
                    </p>
                </div>
            </div>


            <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
                <Image src={Feature3} alt="Feature1" className="hidden w-1/2 sm:block"/>
                <div className="sm:w=1/2 lg:py-[56px] lg:pr-[56px]">
                    <h3 className="font-medium text-[#EB2891] lg:text-[18px]">Growth Monitoring</h3>
                    <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] leading-[58px]">
                        Monitor your sites new subscribers
                    </h1>
                    <Image src={Feature3} alt="Feature1" className="pt-[24px] sm:hidden"/>
                    <p className="py-[24px] text-[#36485C] lg:text-[18px]">
                        Stay on top of things an revamp your work process with our game-changing feature. Get a birds eye view with our customizable dashboard.
                    </p>
                    <div className="flex w-full gap-x-[24px]">
                        <div className="w-1/2 flex-col gap-y-3">
                            <h3 className="text-[20px] font-medium text-[#172026]">100+</h3>
                            <p className="text-[#36485C]">Subscribers</p>
                        </div>
                        <div className="w-1/2 flex-col gap-y-3">
                            <h3 className="text-[20px] font-medium text-[#172026]">80+</h3>
                            <p className="text-[#36485C]">Growth</p>
                        </div>
                    </div>
                    <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#EB2891] lg:text-[18px]">
                        Learn More
                        <span>
                            <Image src={PinkButton} alt="BlurArrow" />
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}