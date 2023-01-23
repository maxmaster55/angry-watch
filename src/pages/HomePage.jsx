import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import MainGrid from '../components/Grid';



function HomePage() {
    return (
        <div className="App">
            <Navbar />
            <MainGrid>
                <Card type="TV Show" title="Big Mouth" imageUrl="https://shahed4u.beauty/wp-content/uploads/2022/07/MV5BNmUxNDBkZTYtN2U0Ni00YmJhLTkwYjktODkzMTQzYzhiYTY0XkEyXkFqcGdeQXVyNjk1NzU1Mjk@._V1_SX700-390x550.jpg" />
            </MainGrid>
        </div>
    );
}

export default HomePage;