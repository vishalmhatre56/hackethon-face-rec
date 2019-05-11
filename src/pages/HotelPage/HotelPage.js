
import React, { Component } from 'react';
import NavBar from '../../component/Navbar';
import '../HomePage/heading.css'
export default class HotelPage extends Component {

    render() {
        return (
            <div>
            <NavBar />
            <header className="header">
                        <h1 className="type type--heading type--heading-1"><span className="type type--subdued">Hotel</span> Maria</h1>
                    </header>
            <div className="text">
                    <h2>News Related Hotel Discounts And Offers</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est reiciendis repellendus itaque voluptates, omnis nobis suscipit, eaque voluptatum quisquam optio natus facilis nesciunt repudiandae laudantium nostrum nam dolores quae voluptatem.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est reiciendis repellendus itaque voluptates, omnis nobis suscipit, eaque voluptatum quisquam optio natus facilis nesciunt repudiandae laudantium nostrum nam dolores quae voluptatem.</p>

                    <h3>This is the first news !</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est reiciendis repellendus itaque voluptates, omnis nobis suscipit, eaque voluptatum quisquam optio natus facilis nesciunt repudiandae laudantium nostrum nam dolores quae voluptatem.</p>

                    <img alt="somealt" 
                    src="http://freefunnydogpictures.com/wp-content/uploads/2014/05/picture_1400053660.jpg" />

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est reiciendis repellendus itaque voluptates, omnis nobis suscipit, eaque voluptatum quisquam optio natus facilis nesciunt repudiandae laudantium nostrum nam dolores quae voluptatem.</p>

                    <h3>This is the second news !</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est reiciendis repellendus itaque voluptates, omnis nobis suscipit, eaque voluptatum quisquam optio natus facilis nesciunt repudiandae laudantium nostrum nam dolores quae voluptatem.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est reiciendis repellendus itaque voluptates, omnis nobis suscipit, eaque voluptatum quisquam optio natus facilis nesciunt repudiandae laudantium nostrum nam dolores quae voluptatem.</p>
                </div>
            </div>
        )
    }
}