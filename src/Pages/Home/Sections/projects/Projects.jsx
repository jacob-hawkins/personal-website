import './projects.css';
import Project from '../../Components/project/Project';
import { proj } from '../../../../proj-list';
import SpikeStat from './SpikeStat';
import SpikeStatFrame from './SpikeStatFrame';
import { useState } from 'react';
import CryptMSGFrame from './CryptMSGFrame';
import CryptMSG from './CryptMSG';

export default function Projects() {
    const [spikeShown, setSpikeShown] = useState(false);
    const [cryptShown, setCryptShown] = useState(false);

    return (
        <div className='projects'>
            <div className='projects-wrapper'>
                <h1 className='projects-title'>Projects</h1>

                {!spikeShown && (
                    <div onMouseEnter={() => setSpikeShown(true)}>
                        <SpikeStatFrame />
                    </div>
                )}
                {spikeShown && (
                    <div onMouseLeave={() => setSpikeShown(false)} className='spikestathover'>
                        <SpikeStat />
                    </div>
                )}

                <div className='cryptmsg'>
                    {!cryptShown && (
                        <div onMouseEnter={() => setCryptShown(true)}>
                            <CryptMSGFrame />
                        </div>
                    )}
                    {cryptShown && (
                        <div onMouseLeave={() => setCryptShown(false)} className='cryptmsghover'>
                            <CryptMSG />
                        </div>
                    )}
                </div>

                <div className='projects-list'>
                    {proj.map((p) => (
                        <Project key={p.id} proj={p} />
                    ))}
                </div>
            </div>
        </div>
    );
}
