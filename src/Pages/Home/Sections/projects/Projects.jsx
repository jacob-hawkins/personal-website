import "./projects.css"
import Project from '../../Components/project/Project'
import { proj } from "../../../../proj-list"

export default function Projects() {
  return (
    <div className='projects'>
        <div className="projects-wrapper">
            <h1 className="projects-title">Projects</h1>
            <hr className="projects-hr" />

            <div className="projects-list">
                {proj.map((p) => (
                    <Project key={p.id} proj={p} />
                ))}        
            </div>
        </div>
    </div>
  )
}
