import React from "react";


const ProjectItem = ({project}) => {

    return (
        <tr>
            <td>
                {project.id}
            </td>
            <td>
                {project.name}
            </td>
            <td>
                {project.repository}
            </td>
            <td>
                {project.users}
            </td>
        </tr>
    )

}

const ProjectsList = ({projects}) => {

    return (
        <table className="table">
            <thead>
                <tr>
            <th scope="col">
                ID
            </th>
            <th scope="col">
                Name
            </th>
            <th scope="col">
                Repository
            </th>
            <th scope="col">
                Users
            </th>
            </tr>
            </thead>
            <tbody>
            {projects.map((project) => <ProjectItem key={project.id} project = {project}/>)}
            </tbody>
        </table>
    )
}

export default ProjectsList;