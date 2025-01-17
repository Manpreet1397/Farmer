import FaqDropdown from "./FaqDropdown";

export default function Faq() {
    return (
        <div className="mx-auto bg-black text-white flex flex-col lg:flex-row justify-center gap-10 py-40 px-12 md:px-32 text-center md:text-left border-y-2 border-neutral-900">

            <div className=" w-full lg:w-1/2 flex flex-col gap-6">
                <div className="w-full lg:w-2/3 flex flex-col gap-8">
                    <div>
                        
                        <h1 className="text-5xl font-bold">FREQUENTLY ASKED QUESTIONS</h1>
                    </div>
                    <div className="text-gray-400">
                        <p>Feel free to reach us if you have any question or special request.</p>
                        
                    </div>
                </div>

            </div>

            <div className=" w-full lg:w-1/2">
                <FaqDropdown />
            </div>
        </div>
    )
}