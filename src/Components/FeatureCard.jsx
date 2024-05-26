
export default function FeatureCard(props) {
    return (
        <div className="bg-neutral-800 hover:bg-neutral-700 bg-opacity-75 backdrop-filter backdrop-blur-md text-white text-left p-1 border-2 border-neutral-600 rounded-2xl flex flex-col gap-2 ">
            <div>
                <img src={props.image} alt="image" className="w-full rounded-xl" />
            </div>

            {/* <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-10 p-2"></div>
            <div className='text-white border rounded -xl bg-opacity-100' >
                <div className="text-center">{props.classname}</div>

                <div className="flex justify-center">
                    <a href="#" className="text-gray-300  border rounded px-1 hover:text-yellow-500 mr-2">Personal</a>
                    <a href="#" className="text-gray-300 hover:text-yellow-500 border rounded px-1">Portfolio</a>
                </div>
            </div>
            <div /> */}
        </div>
    )
}