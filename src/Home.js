import React from 'react'
import Banner from './resources/Slide_1.jpg'
import './Home.css'
import List from './List'
import Card from './Card'

function Home() {
    return (
        <div className='home'>
            <div className='home-container'>
                <div className='main-text'>
                <h1>Lenovo Yoga</h1>
                <p>lorem isum best laptop</p>
                <button>See more</button>
                </div>
            </div>
            <div>
                <List value = "Laptop"/>

            </div>
        </div>
    )
}

export default Home
