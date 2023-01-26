import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchButton from '../components/Buttons/SearchButton';
import Centered from '../components/utils/Centered';

//FIXME: fix the design of the search button
function HomePage({ isHomePage, isSearchActive, setIsSearchActive, searchValue, setSearchValue }) {

    // TODO: do something with this function
    const navigate = useNavigate();
    function handleCardClick(type, id) {
        if (type === "Movie") {
            navigate(`/watch-movie/${id}`);
        } else if (type === "TV Show") {
            navigate(`/watch-show/${id}`);
        }
    }

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