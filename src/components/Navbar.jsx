import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar({ isHomePage }) {

    return (
        <div className="bg-sky-600 p-2 shadow-lg">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <GoBackButton isVisible={!isHomePage} to="/" />
                    <motion.div

                        animate={{ x: isHomePage ? "-35vw" : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="text-white font-thin text-3xl flex gap-2"
                    >
                        Angry Watch
                    </motion.div>
                    <div className="flex self-center">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-white font-mono text-xl flex items-center gap-1
                        hover:text-yellow-500 bg-sky-900 bg-opacity-50 hover:bg-opacity-100
                        hover:border-yellow-500 ml-4 p-2 rounded-full">
                            <FaSearch />
                        </motion.div>
                    </div>
                </div>
            </div>

        </div>
    );
}


function GoBackButton({ to, isVisible }) {
    return (
        <motion.div
            animate={{ opacity: isVisible ? 1 : 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <Link to={to}>
                <button className="text-white font-mono text-xl flex items-center gap-1
            hover:text-yellow-500 bg-sky-900 bg-opacity-50 hover:bg-opacity-100
            hover:border-yellow-500 ml-4 p-2 rounded-full">
                    <FaArrowLeft />
                </button>
            </Link>
        </motion.div>
    )
}
