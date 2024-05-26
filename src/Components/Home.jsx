import React from 'react';

const Home = () => {
    return (
        <div className="flex h-screen bg-black">
            <div className="flex-1 flex items-center justify-center bg-black">
                <div className="max-w-md mx-auto text-center gap-2">
                    <h1 className="text-5xl font-bold text-white mb-4">Unlock A Lifetime Supply of <span className='text-yellow-500'>Premium Farmer Assets</span></h1>
                    <p className="text-lg text-gray-400 mb-4">Access the growing collection of templates to speed the workflow and publish in minutes.</p>
                    <div>
                        <a href="#" className="px-4 py-2 rounded-full shadow-sm hover:shadow-[#ff4800] border-neutral-500 bg-yellow-500 text-black mr-4">
                            See Unlimited Plans
                        </a>
                        
                    </div>
                </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
                <img className="max-h-full max-w-full" src="home1.png" alt=" Image" />
            </div>
        </div>
    );
};

export default Home;
