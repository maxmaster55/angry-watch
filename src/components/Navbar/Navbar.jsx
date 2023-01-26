import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import SearchButton from '../Buttons/SearchButton';
import CustomButton from '../Buttons/CustomButton';
import NavActions from './NavActions';

export default function Navbar({ isHomePage, isSearchActive, setIsSearchActive, searchValue, setSearchValue }) {

    return (
        <div className="bg-sky-600 p-2 shadow-lg sticky top-0 z-10">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    {!isHomePage && <GoBackButton />}
                    <div
                        className="text-white font-thin text-3xl flex gap-2"
                    >
                        Angry Watch
                    </div>
                    <div className="flex self-center">
                        {!isHomePage && <SearchButton
                            setIsActive={(val) => setIsSearchActive(val)}
                            isActive={isSearchActive}
                            searchValue={searchValue}
                            setSearchValue={(value) => setSearchValue(value)}
                        />}
                        <NavActions />
                    </div>
                </div>
            </div>

        </div>
    );
}


function GoBackButton({ }) {
    const navigate = useNavigate()

    return (

        <CustomButton handleClick={() => { navigate(-1) }}>
            <FaArrowLeft />
        </CustomButton>
    )
}

