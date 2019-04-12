import React from 'react'

// Informações dos Documentos estão sendo fornecidas pela Store - projectReducer.js
// verificar projectReducer.js onde estão os dados...
// connection estabelecida no Dashboard

const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by MTB</p>
                <p className="grey-text">20 September, 20:30hr</p>
            </div>
        </div>
    );
}

export default ProjectSummary