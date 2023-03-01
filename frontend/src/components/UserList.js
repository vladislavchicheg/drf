import React from "react";
import { Link } from 'react-router-dom';

const UserItem = ({user}) => {
    
    return (
        <tr>
            <td>
                <Link to={`user/${user.id}`} > {user.username} </Link>
            </td>
            <td>
                {user.first_name}
            </td>
            <td>
                {user.last_name}
            </td>
            <td>
                {user.email}
            </td>
        </tr>
    )

}

const UserList = ({users}) => {

    return (
        <table className="table">
            <thead>
                <tr>
            <th scope="col">
                Username
            </th>
            <th scope="col">
                First name
            </th>
            <th scope="col">
                Last name
            </th>
            <th scope="col">
                Email
            </th>
            </tr>
            </thead>
            <tbody>
            {users.map((user) => <UserItem key={user.id} user = {user}/>)}
            </tbody>
        </table>
    )
}

export default UserList;