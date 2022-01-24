import React, { useState } from 'react'
import { useLocation } from 'wouter'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import TrendingSearches from 'components/TrendingSearches'
import { useGifs } from 'hooks/useGifs'

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()

    const { loading, gifs } = useGifs()

    const handleSubmit = evt => {
        evt.preventDefault()

        pushLocation(`/search/${keyword}`)
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (<>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Search a gif...' value={keyword} onChange={handleChange}></input>
        </form>
        <h3>Última búsqueda</h3>
        <ListOfGifs gifs={gifs}></ListOfGifs>
        <h3>Los gifs más populares</h3>
        <TrendingSearches />
    </>)
}