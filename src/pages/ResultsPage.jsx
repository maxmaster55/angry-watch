import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '../components/Grid';
import MovieCard from '../components/Card';
const { ipcRenderer } = window.require('electron')

export default function ResultsPage() {
    // recive the movies from the route
    var { q } = useParams()
    const [movies, setMovies] = useState([])

    //FIXME: this is not working
    useEffect(() => {
        console.log(q)
        ipcRenderer.invoke('search', q)
            .then(data => {
                setMovies(data)
                console.log(data)
            }).finally(() => {
                console.log(movies)
            })

    }, [q])

    return (
        <Grid>
        </Grid>
    );
}

