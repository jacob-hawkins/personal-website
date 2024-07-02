import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import titleImage from './IMG_9008.jpg';
import { ReactComponent as Logo } from './welcome.svg';
import './Main.css';

function Main() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div>
            <h1 id='mobile-nav'>Jacob Hawkins</h1>

            <div id='mobile-title-center-flex'>
                <div id='mobile-title-grid'>
                    <div>
                        <img src={titleImage} alt='me' />

                        <div id='mobile-title'>
                            {/* <h1 id="title-h1">Welcome</h1> */}
                            <Logo id='mobile-welcome' />
                        </div>

                        <h1 id='mobile-title-grid-h1'>My name is Jacob Hawkins.</h1>
                        <h3>
                            I am a computer science major at the University of Tennessee and am a
                            part of the Grand Cooke Engineering Honors Program. I enjoy offroading
                            my 2008 Jeep Wrangler, playing spikeball with friends, and hiking.
                        </h3>
                    </div>
                </div>
            </div>

            <div className='mobile-lines'>
                <hr className='mobile-main-hr' id='mobile-first' />
                <hr className='mobile-main-hr' id='mobile-second' />
                <hr className='mobile-main-hr' id='mobile-third' />
                <hr className='mobile-main-hr' id='mobile-fourth' />
                <hr className='mobile-main-hr' id='mobile-fifth' />
            </div>
        </div>
    );
}

export default Main;
