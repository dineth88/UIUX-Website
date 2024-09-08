import Image from "next/image";
import BlurArrow from "../../public/assets/blue-button.svg";

export function Hero(){
    return(
        <div className="pt-4">
            <div className="px-[20px]">
                <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026]">
                    Start monitoring your website like a pro
                </h1>
                <p className="text-center pt-6 text-[#36485C]">
                    Get a birds eye view with our customizable dashboard, 
                    Stay on top of your things! Revamp your work process 
                    with our game-changing feature. Boost productivity and efficiency!
                </p>
                <div className="flex w-full pt-8">
                    <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px]">Try for free</button>
                    <button className="w-1/2 py-4 px-8 text-[#4328EB] flex item-center justify-center gap-x-2">
                        View Pricing
                        <span>
                            <Image src={BlurArrow} alt="BlurArrow"/>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}