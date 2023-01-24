import React, { useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { MdCancel } from 'react-icons/md'
import { motion } from 'framer-motion'
import CustomButton from './CustomButton'


export default function SearchButton({ isActive, setIsActive, searchValue, setSearchValue }) {

    function handleSearchButton() {
        if (isActive) {
            if (searchValue == "") {
                setIsActive(false)
            } else {
                //TODO: do something with search value

            }
        } else {
            setIsActive(!isActive)
        }
    }
    useEffect(() => {
        // close search bar if search value is empty
        if (isActive && searchValue !== "") {
            //TODO: do something with search value
        }
        // handle escape key press
        function handleEscapeKeyPress(e) {
            if (e.key === "Escape") {
                setIsActive(false)
            }
        }
        window.addEventListener("keydown", handleEscapeKeyPress)
        return () => {
            window.removeEventListener("keydown", handleEscapeKeyPress)
        }

    }, [searchValue, isActive])

    return (
        <div className='flex'>
            <motion.input
                initial={{ opacity: 0, x: 100 }}
                animate={{
                    opacity: 1,
                    x: isActive ? 0 : 10
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className={(!isActive ? "hidden" : "inline") + " bg-sky-900 bg-opacity-50 hover:bg-opacity-100\
                hover:border-yellow-500 px-4 rounded-full text-white relative "}
                type="text"
                value={searchValue}
                onChange={(e) => { setSearchValue(e) }}
                placeholder='Search for a movie...'
                onKeyPress={(e) => { }}
            >
            </motion.input>
            <CustomButton handleClick={() => handleSearchButton()}>
                {(isActive && searchValue === "") ? <MdCancel /> : <FaSearch />}
            </CustomButton>
        </div>
    )
}