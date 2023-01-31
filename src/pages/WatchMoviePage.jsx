import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingIndicator from '../components/utils/LoadingIndicator';
import { Channels } from '../Backend/types/Channels'
const { ipcRenderer } = window.require('electron')

export default function WatchMoviePage() {
    const { slug } = useParams()
    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        ipcRenderer.invoke(Channels.GET_MOVIE, slug).then(data => {
            setMovie(data)
            setLoading(false)
            console.log(data)
        }).catch(err => {
            setLoading(false)
            console.log(err)
        })
    }, [slug])

    return (
        <div>
            <h1>
                {loading ? <LoadingIndicator /> : <MainLayout movie={movie} />}
            </h1>
        </div>
    );
}

function MainLayout({ movie }) {
    function handleClick() {
        console.log(movie.watch_urls[0].url)
        ipcRenderer.invoke(Channels.DOWNLOAD, movie.watch_urls[0].url)
    }


    return (
        <div className="" onClick={() => handleClick()}>
            {movie.title_english}
        </div>
    )
}