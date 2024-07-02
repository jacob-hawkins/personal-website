import React from 'react';
import { ReactComponent as Welcome } from '../assets/svg/welcome.svg';
import headshot from '../assets/images/IMG_4093.JPG';
import styles from '../styles/components/Header.module.scss';

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <Welcome />
                    <h1>My name is Jacob Hawkins</h1>
                    <p>
                        I am a computer science major at the University of Tennessee and am a part
                        of the Grand Cooke Engineering Honors Program. I enjoy off-roading my 2008
                        Jeep Wrangler, playing Spikeball with friends, and hiking.
                    </p>
                </div>
                <div className={styles.right}>
                    <img src={headshot} alt='Head Shot' />
                </div>
            </div>
        </div>
    );
}

export default Header;
