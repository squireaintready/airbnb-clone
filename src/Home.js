import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className='home'>
            <Banner  />
            <div className="home__section">
                <Card
                    src='https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720'
                    title='Online Experiences'
                    description='Unique activies we can do together, led by a world of host.'
                />
                <Card 
                    src='https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720'
                    title='Unique Stays'
                    description='Spaces that are more than just a place to sleep.'
                />
                <Card
                    src='https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720'
                    title='Entire Homes'
                    description='Comfortable private places with room for friends or family.'
                />
            </div>
            <div className="home__section">
                <Card
                    src='https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg'
                    title='3 Bedroom Flat in New York.'
                    description='Superhost with a stunning view of the beachside in New York.'
                    price='$220/night'
                />
                <Card 
                    src='https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg'
                    title='Penthouse in NYC'
                    description='Enjoy the amazing sights of the greatest city with this stunning penthouse.'
                    price='$480/night'
                />
                <Card
                    src='https://media.nomadicmatt.com/2018/apartment.jpg'
                    title='1 Bedroom Apartment'
                    description='Superhost with amazing amenities and a fabulous shopping complex nearby.'
                    price='$180/night'
                />
            </div>
        </div>
    )
}

export default Home
