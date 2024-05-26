import React from 'react';

const DisplayCard = () => {
    return (
        <div className="relative h-64 bg-cover bg-center  " style={{ backgroundImage: "url('card1.png')" }}>
            <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-10 p-2">
                <div className='text-white border rounded -xl bg-opacity-100' > className

                    <div className="flex justify-center">
                        <a href="#" className="text-gray-300  border rounded px-1 hover:text-yellow-500 mr-2">Button 1</a>
                        <a href="#" className="text-gray-300 hover:text-yellow-500 border rounded px-1">Button 2</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayCard;
