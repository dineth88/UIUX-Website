import Image from "next/image";
import Check from "../../public/assets/check.svg";

export function Pricing(){
    return (
        <div className="py-[48px] lg:py-[60px]">
            <h1 className="text-[#142026] text-center font-medium text-2xl lg:text-[42px]">
                Flexible plans for you
            </h1>
            <p className="pt-[16px] pd-[40px] text-center text-[#36485C] lg:text-[18px]">
                No hidden fees!
            </p>

            <div className="flex fle-col gap-y-6 lg:flex-row gap-x-[24px]">
                <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
                    <div>
                        <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">
                            Free Trial
                        </h3>
                        <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
                            Perfect go testing the waters
                        </p>

                        <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">
                            0$<span className="text-[#5F7896]">/mo</span>
                        </h2>

                        <ul className="flex flex-col gap-y-2 pt-4 text-[#5F7896] ">
                            <li className="flex items-center gap-x-2">
                                <span>
                                    <Image src={Check} alt="Check" />
                                </span>
                                Basic limited export options.
                            </li>
                            <li className="flex items-center gap-x-2">
                                <span>
                                    <Image src={Check} alt="Check" />
                                </span>
                                Access up to 3 projects.
                                </li>
                                
                            <li className="flex items-center gap-x-2">
                                <span>
                                    <Image src={Check} alt="Check" />
                                </span>
                                Collaborate with one team member.
                            </li>
                        </ul>
                    </div>

                    <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
                        Start Trial
                    </button>

                </div>

                <div className="w-full rounded-[8px] bg-[#4328EB] p-6 flex flex-col lg:justify-between" >
                    <div>
                        <h3 className="font-medium text-white text-[18px] lg:text-xl">
                            Business
                        </h3>
                        <p className="pt-[12px] text-[#F4F8FA] lg:text-[18px]">
                            Perfect for small businesses
                        </p>

                        <h2 className="pt-4 text-2xl font-medium lg:text-[32px] text-white">
                            $500<span className="text-[#F4F8FA]">/mo</span>
                        </h2>

                        <ul className="flex flex-col gap-y-2 pt-4 text-[#F4F8FA] ">
                            <li className="flex items-center gap-x-2">
                                <span>
                                    <Image src={Check} alt="Check" />
                                </span>
                                Unlimited projects.
                            </li>
                            <li className="flex items-center gap-x-2">
                                <span>
                                    <Image src={Check} alt="Check" />
                                </span>
                                Advanced prototyping.
                                </li>
                            <li className="flex items-center gap-x-2">
                                <span>
                                    <Image src={Check} alt="Check" />
                                </span>
                                Team collaboration (5 users).
                            </li>
                            <li className="flex items-center gap-x-2">
                                <span>
                                    <Image src={Check} alt="Check" />
                                </span>
                                Priority support.
                            </li>
                            <li className="flex items-center gap-x-2">
                                <span>
                                    <Image src={Check} alt="Check" />
                                </span>
                                Premium templates.
                            </li>
                        </ul>
                    </div>

                    <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
                        Get Started
                    </button>

                </div>

                <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
                    <div>
                        <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">
                            Enterprice
                        </h3>
                        <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
                            Perfect for big companies.
                        </p>

                        <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">
                            Custom
                        </h2>

                        <p className="pt-4 text-[16px] text-[#36485C]">Unlimited access to all design tools, with advanced security, custom integrations, and dedicated support for enterprise businesses.</p>
                        <p className="pt-4 text-[16px] text-[#36485C]">Collaborate with unlimited users, receive personalized training, and enjoy tailored solutions for large-scale, enterprise-level design projects.</p>
                    </div>

                    <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
                        Contact Us
                    </button>

                </div>
            </div>
        </div>
    );
}