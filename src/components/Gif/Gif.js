import React from 'react'
import { Link } from 'wouter'
import './Gif.css'

export default function Gif({ title, id, url }) {
    return (

        <Link to={`/gif/${id}`}>
            <div className='Gif'>
                <img alt="{title}" src={url}></img>
            </div>
        </Link >
    )
}