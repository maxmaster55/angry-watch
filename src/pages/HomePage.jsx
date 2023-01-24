import React from 'react';
import Card from '../components/Card';
import MainGrid from '../components/Grid';
import { useNavigate } from 'react-router-dom';


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
        <div className="App">
            <MainGrid>
                <Card
                    id={1}
                    type="Movie"
                    title="Big Mouth"
                    imageUrl="https://shahed4u.beauty/wp-content/uploads/2022/07/MV5BNmUxNDBkZTYtN2U0Ni00YmJhLTkwYjktODkzMTQzYzhiYTY0XkEyXkFqcGdeQXVyNjk1NzU1Mjk@._V1_SX700-390x550.jpg"
                    onClick={handleCardClick}
                />
            </MainGrid>
        </div>
    );
}

export default HomePage;