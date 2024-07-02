import React from 'react';
import projects from '../assets/data/Projects.json';
import { ReactComponent as CryptMSG } from '../assets/svg/cryptmsg.svg';

function Projects() {
    return (
        <div className='projects'>
            <h1>Projects</h1>
            <CryptMSG />
        </div>
    );
}

export default Projects;
