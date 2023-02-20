import React from "react";


const UserItem = ({user}) => {

    return (
        <tr>
            <td>
                {user.username}
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
            {users.map((user) => <UserItem key={user.username} user = {user}/>)}
            </tbody>
        </table>
    )
}

export default UserList;