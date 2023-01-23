import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar({ isHomePage, isSearchActive, setIsSearchActive }) {

    return (
        <div className="bg-sky-600 p-2 shadow-lg">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    {!isHomePage && <GoBackButton to="/" />}
                    <div
                        className="text-white font-thin text-3xl flex gap-2"
                    >
                        Angry Watch
                    </div>
                    <div className="flex self-center">
                        <SearchButton setIsActive={(val) => setIsSearchActive(val)} isActive={isSearchActive} />
                    </div>
                </div>
            </div>

        </div>
    );
}


function GoBackButton({ to }) {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <Link to={to}>
                <button className="text-white font-mono text-xl flex items-center gap-1
            hover:text-yellow-500 bg-sky-900 bg-opacity-50 hover:bg-opacity-100
            hover:border-yellow-500 ml-2 p-2 rounded-full">
                    <FaArrowLeft />
                </button>
            </Link>
        </motion.div>
    )
}

function SearchButton({ isActive, setIsActive, searchValue, setSearchValue }) {
    return (
        <div className='flex'>
            <motion.input
                initial={{ opacity: 0, x: 100 }}
                animate={{
                    opacity: 1,
                    visibility: isActive ? "visible" : "hidden",
                    x: isActive ? 0 : 10
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="bg-sky-900 bg-opacity-50 hover:bg-opacity-100
                hover:border-yellow-500 px-4 rounded-full text-white"
                type="text"
                value={searchValue}
                onChange={(e) => { setSearchValue(e.target.value) }}
                placeholder='Search'
            >
            </motion.input>

            <div
                onClick={() => setIsActive(!isActive)}
                className="text-white font-mono text-xl flex items-center gap-1
                hover:text-yellow-500 bg-sky-900 bg-opacity-50 hover:bg-opacity-100
                hover:border-yellow-500 ml-2 p-2 rounded-full"
            >
                <FaSearch />
            </div>

        </div>
    )
}