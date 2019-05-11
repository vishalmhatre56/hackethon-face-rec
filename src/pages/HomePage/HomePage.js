import React, { Component } from 'react';
import './home.css'
import './heading.css'
// import './hotel.css'
import NavBar from '../../component/Navbar';
export default class HomePage extends Component {
    render() {
        return (
            <div className="homepage">
                <NavBar />
                <div className="section">

                    <header className="header">
                        <h1 className="type type--heading type--heading-1"><span className="type type--subdued">Hotel</span> Maria</h1>
                    </header>
                    <div className="row">
                        <ul className="case-study-images offset-1 col-11">
                            <li>
                                <img src="https://ivang-design.com/svg-load/hotel/room1.jpg" alt="" />
                                <p>Suite Tanya</p>
                                <div className="info bg-dark">
                                    <img src="https://ivang-design.com/svg-load/hotel/1.svg" alt="" />
                                    <img src="https://ivang-design.com/svg-load/hotel/2.svg" alt="" />
                                    <img src="https://ivang-design.com/svg-load/hotel/3.svg" alt="" />
                                    <img src="https://ivang-design.com/svg-load/hotel/5.svg" alt="" />
                                    {/* <a href="#" className="hover-target">full info</a> */}
                                </div>
                            </li>
                            <li>
                                <img src="https://ivang-design.com/svg-load/hotel/room2.jpg" alt="" />
                                <p>Suite Helen</p>
                                <div className="info  bg-dark">
                                    <img src="https://ivang-design.com/svg-load/hotel/1.svg" alt="" />
                                    <img src="https://ivang-design.com/svg-load/hotel/2.svg" alt="" />
                                    <img src="https://ivang-design.com/svg-load/hotel/3.svg" alt="" />
                                    <img src="https://ivang-design.com/svg-load/hotel/4.svg" alt="" />
                                    <img src="https://ivang-design.com/svg-load/hotel/6.svg" alt="" />
                                    {/* <a href="#" className="hover-target">full info</a> */}
                                </div>
                            </li>
                            <li>
                                <img src="https://ivang-design.com/svg-load/hotel/room3.jpg" alt="" />
                                <p>Suite Andrea</p>
                                <div className="info  bg-dark">
                                    <img src="https://ivang-design.com/svg-load/hotel/2.svg" alt="" />
                                    <img src="https://ivang-design.com/svg-load/hotel/3.svg" alt="" />
                                    <img src="https://ivang-design.com/svg-load/hotel/4.svg" alt="" />
                                    <img src="https://ivang-design.com/svg-load/hotel/5.svg" alt="" />
                                    {/* <a href="#" className="hover-target">full info</a> */}
                                </div>
                            </li>
                            <li>
                                <img src="https://ivang-design.com/svg-load/hotel/room4.jpg" alt="" />
                                <p>Suite Diana</p>
                                <div className="info bg-dark">
                                    <img src="https://ivang-design.com/svg-load/hotel/1.svg" alt="" />
                                    <img src="https://ivang-design.com/svg-load/hotel/2.svg" alt="" />
                                    <img src="https://ivang-design.com/svg-load/hotel/3.svg" alt="" />
                                    <img src="https://ivang-design.com/svg-load/hotel/4.svg" alt="" />
                                    <img src="https://ivang-design.com/svg-load/hotel/6.svg" alt="" />
                                    {/* <a href="#" className="hover-target">full info</a> */}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}