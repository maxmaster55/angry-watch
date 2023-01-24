import React from 'react'
import { motion } from 'framer-motion'


export default function CustomButton({ handleClick, children }) {

    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleClick()}
            className="cursor-pointer text-white font-mono text-xl flex items-center gap-1
                hover:text-yellow-500 bg-sky-900 bg-opacity-50 hover:bg-opacity-100
                hover:border-yellow-500 ml-2 p-2 rounded-full"
        >
            {children}
        </motion.div>
    )
}
