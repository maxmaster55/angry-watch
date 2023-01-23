import React from 'react';
import { FaSearch } from 'react-icons/fa';

function Navbar() {
    return (
        <div className="bg-sky-600 p-2 shadow-lg">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <div className="text-white font-thin text-3xl">
                        Angry Watch
                    </div>
                    <div className="flex self-center">
                        <div className="text-white font-mono text-xl flex items-center gap-1
                        hover:text-yellow-500 bg-sky-900 bg-opacity-50 hover:bg-opacity-100
                        hover:border-yellow-500 ml-4 p-2 rounded-full">
                            <FaSearch />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Navbar;