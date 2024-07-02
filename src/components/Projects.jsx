import React from 'react';
import projects from '../assets/data/Projects.json';
import { ReactComponent as Spikestat_Static } from '../assets/svg/spikestat-static.svg';
import { ReactComponent as CryptMSG_Static } from '../assets/svg/cryptmsg-static.svg';

function Projects() {
    return (
        <div className='projects'>
            <h1>Projects</h1>
            <Spikestat_Static />
            <CryptMSG_Static />
        </div>
    );
}

export default Projects;
