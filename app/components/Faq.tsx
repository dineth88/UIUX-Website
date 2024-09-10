"use client";

import Image from "next/image";
import * as Accordion from '@radix-ui/react-accordion';
import Plus from "../../public/assets/Plus.svg";

const items = [
    {
        question:"How long does the design process typically take?",
        answer:"The design process can vary depending on the project's complexity, but typically it takes 4-6 weeks for wireframes, prototyping, and revisions to ensure the best user experience tailored to your specific needs." 
    }, 
    {
        question:"What is the difference between UI and UX design?",
        answer:"UI (User Interface) focuses on the visual elements and layout, while UX (User Experience) is about optimizing the user’s journey and interactions with the product, ensuring ease of use and satisfaction." 
    }, 
    {
        question:"Can I make revisions after the design is completed?",
        answer:"Yes, we provide opportunities for revisions during the design phase to ensure your satisfaction. After final approval, additional changes may incur extra costs, but we’re flexible to accommodate your needs." 
    }, 
    {
        question:"How do you ensure mobile responsiveness in designs?",
        answer:"We design with a mobile-first approach, ensuring that all layouts and interfaces are fully responsive across devices, including smartphones and tablets, to deliver a seamless experience regardless of screen size." 
    }
]

export function Faq(){
    return(
        <div className="flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-6">
            <div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px]">
                <h3 className = "text-[#EB2891] text-[14px] font-medium lg:text-base">Frequently Asked Questions</h3>
                <h1 className = "py-4 text-2xl font-medium text-[#172026] lgLtext-[42px] lg:leading-[58px]">Lets Clarify some of your questions</h1>
                <p className = "text-[#36485C] pb-6">The FAQ section provides quick, clear answers to common user questions, improving experience and efficiency.</p>
            </div>

            <div className="lg:w-2/3">
                <Accordion.Root type="single" defaultValue="item-1" collapsible className="flex flex-col gap-y-4">
                    {items.map((item, index)=>(
                        <div key={index}>

                            <Accordion.Item value={'item-${index+1}'} className="bg-[#E3F1FF] p-[16px] rounded-[8px]">
                                
                                <Accordion.Header>

                                    <Accordion.Trigger className = "flex w-full items-center justify-between">
                                        <p className = "text-left font-medium text-[#172026] lg:text-[18px]">{item.question}</p>
                                        <span>
                                        <Image src={Plus} alt="Plus"  className = "h-10 w-10 lg:w-6 lg:h-6"></Image>
                                        </span>
                                    </Accordion.Trigger>
                                </Accordion.Header>
                                
                                <Accordion.Content>
                                    <p className = "pt-2 text-[#38495C]">{item.answer}</p>
                               
                                </Accordion.Content>
                            </Accordion.Item>

                        </div>
                    ))}
                </Accordion.Root>
            </div>
        </div>
    );
}