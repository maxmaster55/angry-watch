import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '../components/Grid';
import MovieCard from '../components/Card';
const { ipcRenderer } = window.require('electron')

export default function ResultsPage() {
    // recive the movies from the route
    var { q } = useParams()
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    function processImages(data) {
        //replace the string small_cover_image with medium_cover_image
        data.forEach(movie => {
            movie.small_cover_image = movie.small_cover_image.replace("small", "medium")
        })

        data.forEach(movie => {
            movie.small_cover_image = "https://image.yts.rs" + movie.small_cover_image + ".jpg"
        })
        console.log(data[0])
        return data
    }


    useEffect(() => {
        console.log(q)
        ipcRenderer.invoke('search', q)
            .then(data => {
                data = processImages(data)
                setMovies(data)
                setLoading(false)
            }).finally(() => {
                setLoading(false)
            })

    }, [q])

    return (
        <Grid>
            {loading ? <h1>Loading...</h1> : movies.map(movie =>
                <MovieCard key={movie.id}
                    id={movie.id}
                    title={movie.title_english}
                    imageUrl={movie.small_cover_image}
                    onClick={() => { }}
                />
            )}
        </Grid>
    );
}

