import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SearchButton from '../Buttons/SearchButton';
import CustomButton from '../Buttons/CustomButton';
import NavActions from './NavActions';

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
                        <NavActions />
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

