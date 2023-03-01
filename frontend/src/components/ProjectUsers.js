import React from 'react'
import {useParams} from 'react-router-dom'


const UserItem = ({user}) => {
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.username}</td>
        </tr>
    )
}


const ProjectUsersList = ({users}) => {
    let { id } = useParams()
    let filtered_users = users.filter((user) => user.projects.includes(parseInt(id)))

    return (
        <table>
            <thead>
            <tr>
            <th>id</th>
            <th>name</th>
            <th>repository</th>
            <th>users</th>
            </tr>
            </thead>
            {filtered_users.map((b) => <UserItem user={b} />)}
        </table>
    )
}

export default ProjectUsersList