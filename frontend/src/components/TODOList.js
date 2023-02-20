import React from "react";


const ToDoItem = ({todo}) => {
    return (
        <tr>
            <td>{todo.project}</td>
            <td>{todo.text}</td>
            <td>{todo.data_create}</td>
            <td>{todo.data_update}</td>
            <td>{todo.author}</td>
            <td>{todo.is_active}</td>
        </tr>
    )
}


const ToDoList = ({todos}) => {
    return (
        <div>
            <table className="table">
            <thead>
                <tr>
                    <th scope="col">Project</th>
                    <th scope="col">Text</th>
                    <th scope="col">Created</th>
                    <th scope="col">Updated</th>
                    <th scope="col">User created</th>
                    <th scope="col">Complete</th>
                </tr>
                </thead>
                <tbody>
                {todos.map((todo) => <ToDoItem key={todo.id} todo={todo} />)}
                </tbody>
            </table>
        </div>
    )
}


export default ToDoList