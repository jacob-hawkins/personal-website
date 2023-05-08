import "./project.css"

export default function Project({proj}) {
    function popup() {
        console.log("clicked");
    }
    
    return (
        <div className="project" onClick={popup}>
            <div className="project-title">{proj.title}</div>
            <hr />
            <div className="project-date">{proj.date}</div>
        </div>
    )
}
