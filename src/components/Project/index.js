import React from "react";

function Project(props) {
    return (
        <div className="col-sm-12 col-lg-6">
            <div className="card">
                <img src={props.image} className="card-img-top" alt={props.alt} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
                    <p className="card-text">{props.description}</p>
                    <a href={props.deployedUrl} className="card-link" target="_blank" rel="noopener noreferrer">{props.deployedLink}</a>
                    <a href={props.githubUrl} className="card-link" target="_blank" rel="noopener noreferrer">{props.githubLink}</a>
                </div>
            </div>
        </div>
    )
}

export default Project