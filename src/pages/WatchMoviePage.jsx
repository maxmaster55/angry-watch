import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingIndicator from '../components/utils/LoadingIndicator';
const { ipcRenderer } = window.require('electron')

export default function WatchMoviePage() {
    const { slug } = useParams()
    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        ipcRenderer.invoke("getMovie", slug).then(data => {
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
                {loading ? <LoadingIndicator /> : <MainLayout slug={slug} />}
            </h1>
        </div>
    );
}

function MainLayout({ slug }) {
    return (
        <div className="">
            {slug}
        </div>
    )
}