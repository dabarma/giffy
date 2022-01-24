import React from 'react'
import Gif from '../Gif/Gif'
import './ListOfGifs.css'

export default function ListOfGifs({ gifs }) {
    return <div className='images-container'>
        {
            gifs.map(({ id, title, url }) =>
                <Gif
                    key={id}
                    title={title}
                    url={url}
                    id={id}></Gif>
            )
        }
    </div>
}
