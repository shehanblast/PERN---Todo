import React, {Fragment, useState, useEffect} from "react";

import EditTodo from "./EditTodo";

const ListTodo = () => {

    //define all the use effect
    //[] - ensure only sends 1 request
    useEffect(() => {
        getTodos();
        deleteTodo();
    }, []);

    const getTodos = async () => {

        try {

            const response = await fetch("/todos/");
            const jsonData = await response.json();

            setTodo(jsonData);


        } catch (err) {
            console.log(err.message);
        }

    }


    //put the data in a state
    //empty array
    const [todos, setTodo] = useState([]);

    console.log(todos);

    // `` - allows to put variables inside url
    const deleteTodo = async (id) => {
        try {

            const deleteTo = await fetch(`/todos/${id}`,
                {
                    method: "DELETE"
                });

            console.log(deleteTo);

            //filter the array with the id and reload the table
            setTodo(todos.filter(todo => todo.todo_id !== id))


        } catch (err) {
            console.log(err.message);
        }
    }


    return (
        <Fragment>
            <table className="table">
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {todos.map(todo => (
                    <tr>
                        <td key={todo.todo_id}>{todo.description}</td>
                        <td><EditTodo todo={todo}/></td>
                        <td>
                            <button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Fragment>
    );
}

export default ListTodo;