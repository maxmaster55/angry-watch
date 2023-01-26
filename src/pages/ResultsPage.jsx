import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Grid from '../components/Grid';
import MovieCard from '../components/Card';
import LoadingIndicator from '../components/utils/LoadingIndicator';


const { ipcRenderer } = window.require('electron')

export default function ResultsPage() {
    // recive the movies from the route
    var { q } = useParams()
    const navigate = useNavigate()
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)



    function handleCardClick(name) {
        navigate(`/movie/${name}`)
    }

    useEffect(() => {
        // recive the movies from the main process
        ipcRenderer.invoke('search', q)
            .then(data => {
                setMovies(data)
                setLoading(false)
            }).finally(() => {
                setLoading(false)
            })
    }, [q])

    return (
        <div className="">
            {loading ? <LoadingIndicator /> :
                <Grid>
                    {movies.map(movie =>
                        <MovieCard key={movie.id}
                            id={movie.id}
                            title={movie.title_english}
                            imageUrl={movie.small_cover_image}
                            onClick={() => { handleCardClick(movie.slug) }}
                        />
                    )}
                </Grid>}
        </div>
    );
}

