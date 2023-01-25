import React, { useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { MdCancel } from 'react-icons/md'
import { motion } from 'framer-motion'
import CustomButton from './CustomButton'
const { ipcRenderer } = window.require('electron')

export default function SearchButton({ isActive, setIsActive, searchValue, setSearchValue }) {
    function handleSearchButton() {
        if (isActive) {
            if (searchValue == "") {
                setIsActive(false)
            } else {
                //TODO: do something with search value
                ipcRenderer.send('search', searchValue)

            }
        } else {
            setIsActive(!isActive)
        }
    }
    // handle enter key
    function handlekeyPress(e) {
        if (e.key === 'Enter') {
            handleSearchButton()
        }
    }

    // handle click outside and esc key
    useEffect(() => {
        function handleClickOutside(event) {
            if (isActive && !event.target.closest('#search-input') && !event.target.closest('#search-button')) {
                setSearchValue("")
                setIsActive(false)
            }
        }
        function handleEscKey(event) {
            if (isActive && event.key === 'Escape') {
                setSearchValue("")
                setIsActive(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscKey);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscKey);
        };
    }, [isActive, setIsActive]);

    return (
        <div className='flex'>
            <motion.input
                id='search-input'
                initial={{ opacity: 0, x: 100 }}
                animate={{
                    opacity: 1,
                    x: isActive ? 0 : 10
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className={(!isActive ? "hidden" : "inline") + " bg-sky-900 bg-opacity-50 hover:bg-opacity-100\
                hover:border-yellow-500 px-4 rounded-full text-white relative h-auto"}
                type="text"
                value={searchValue}
                onChange={(e) => { setSearchValue(e.target.value) }}
                placeholder='Search for a movie...'
                onKeyPress={(e) => { handlekeyPress(e) }}
            >
            </motion.input>
            <CustomButton id="search-button" handleClick={() => handleSearchButton()}>
                {(isActive && searchValue === "") ? <MdCancel /> : <FaSearch />}
            </CustomButton>
        </div>
    )
}