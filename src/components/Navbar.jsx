import React, { useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CustomButton from './CustomButton';

export default function Navbar({ isHomePage, isSearchActive, setIsSearchActive, searchValue, setSearchValue }) {

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
                        <SearchButton
                            setIsActive={(val) => setIsSearchActive(val)}
                            isActive={isSearchActive}
                            searchValue={searchValue}
                            setSearchValue={(e) => setSearchValue(e.target.value)}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}


function GoBackButton({ to }) {
    return (

        <Link to={to}>
            <CustomButton handleClick={() => { }}>
                <FaArrowLeft />
            </CustomButton>
        </Link>

    )
}

function SearchButton({ isActive, setIsActive, searchValue, setSearchValue }) {

    function handleSearchButton() {
        if (isActive) {
            if (searchValue == "") {
                setIsActive(false)
            } else {
                console.log("searching")
            }
        } else {
            setIsActive(!isActive)
        }
    }
    useEffect(() => {
        // close search bar if search value is empty
        if (isActive && searchValue !== "") {
            console.log("searching")
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