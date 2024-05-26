
export default function Footer() {
    return (
        <div className="bg-black"> 
        <div className="flex justify-center items-center w-full h-full ">
        <img src="logo.png" alt="Logo" className="h-12" />
      </div>
        <div className="mx-auto bg-black border-black text-gray-400 flex justify-start flex-col md:flex-row py-12 px-8 md:px-32 text-center md:text-left">
            

            <div className="flex  text-base flex-col md:flex-row md:w-2/3 md:gap-32">
                <a href="#">Unlimited Access</a >
                <a href="#">Terms of Use</a >
                <a href="#">Become an Affilate</a >
                <a href="#">Contact</a >
            </div>
            </div>
        </div>
    )
}