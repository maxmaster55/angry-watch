import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchButton from '../components/Buttons/SearchButton';
import { Centered } from '../components/utils/Centered';


function HomePage() {

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
            <SearchButton />
        </Centered>
    )
}

export default HomePage;