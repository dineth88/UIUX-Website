export function Pricing(){
    return (
        <div className="py-[48px]">
            <h1 className="text-[#142026] text-center font-medium text-2xl">
                Flexible plans for you
            </h1>
            <p className="pt-[16px] pd-[40px] text-center text-[#36485C]">
                No hidden fees!
            </p>

            <div className="flex fle-col gap-y-6">
                <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col">
                    <div>
                        <h3 className="font-medium text-[#4328EB] text-[18px]">
                            Free Trial
                        </h3>
                        <p className="pt-[12px] text-[#36485C]">
                            Perfect gor testing the waters
                        </p>

                        <h2 className="pt-4 text-2xl font-medium">
                            0$<span className="text-[#5F7896]">/mo</span>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}