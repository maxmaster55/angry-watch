import React from 'react';
import SearchButton from '../components/Buttons/SearchButton';
import Centered from '../components/utils/Centered';

//FIXME: fix the design of the search button
function HomePage({ isSearchActive, setIsSearchActive, searchValue, setSearchValue }) {

    // TODO: do something with this function
    return (
        <Centered>
            <SearchButton
                searchValue={searchValue}
                isActive={isSearchActive}
                setSearchValue={setSearchValue}
                setIsActive={setIsSearchActive}
            />
        </Centered>
    )
}

export default HomePage;