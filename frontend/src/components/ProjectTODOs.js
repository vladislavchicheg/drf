import React from 'react'
import {useParams} from 'react-router-dom'


const TODOItem = ({todo}) => {
    return (
        <tr>
            <td>{todo.id}</td>
            <td>{todo.project}</td>
            <td>{todo.text}</td>
            <td>{todo.date_create}</td>
            <td>{todo.data_update}</td>
            <td>{todo.author}</td>
            <td>{todo.is_active}</td>
        </tr>
    )
}

const ProjectTODOsList = ({todos}) => {
    let { id } = useParams()
    let filtered_todos = todos.filter((todo) => todo.users.includes(parseInt(id)))

    return (
        <table>
            <thead>
            <tr>
                <th>id</th>
                <th>project</th>
                <th>text</th>
                <th>date_create</th>
                <th>data_update</th>
                <th>author</th>
                <th>is_active</th>
                <th>users</th>
            </tr>
            </thead>
            {filtered_todos.map((b) => <TODOItem todo={b} />)}
        </table>
    )
}

export default ProjectTODOsList