import './projects.css';
import Project from '../../Components/project/Project';
import { proj } from '../../../../proj-list';
import SpikeStat from './SpikeStat';

export default function Projects() {
    return (
        <div className='projects'>
            <div className='projects-wrapper'>
                <h1 className='projects-title'>Projects</h1>

                <div
                    style={{
                        display: 'block',
                        width: '700px',
                        height: '150px',
                        backgroundColor: 'red',
                    }}></div>

                <SpikeStat />

                <div className='projects-list'>
                    {proj.map((p) => (
                        <Project key={p.id} proj={p} />
                    ))}
                </div>
            </div>
        </div>
    );
}
