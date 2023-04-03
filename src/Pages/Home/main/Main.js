import React from 'react'
import titleImage from './IMG_9008.jpg'
import { ReactComponent as Logo } from './welcome.svg';
import './Main.css';

function Main() {
    return (
        <>
            <div id="title-center-grid">
                <div id="title-grid">
                    <div>
                        <div id="title">
                            {/* <h1 id="title-h1">Welcome</h1> */}
                            <Logo id="welcome" />
                        </div>

                        <h1 id="title-grid-h1">My name is Jacob Hawkins.</h1>
                        <h3>
                            I am a computer science major at the University of Tennessee. I am a part of the Grand Cooke Engineering    Honors Program and will soon be working with the upcoming web development club here at UT.
                        </h3>
                    </div>

                    <img src={titleImage} alt="me" />
                </div>
            </div>
            

            <div className="lines">
                <hr className="main-hr" id="first" />
                <hr className="main-hr" id="second" />
                <hr className="main-hr" id="third" />
                <hr className="main-hr" id="fourth" />
                <hr className="main-hr" id="fifth" />
                <hr className="main-hr" id="sixth" />
            </div>
        </>
    )
}

export default Main
