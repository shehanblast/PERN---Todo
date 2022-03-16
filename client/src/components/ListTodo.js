import React,{Fragment,useState,useEffect} from "react";

const ListTodo = () => {

    //define all the use effect
    //[] - ensure only sends 1 request
    useEffect(() => {
        getTodos();
    },[]);

    const getTodos = async () => {

        try {

            const response = await fetch("http://localhost:5000/todos/");
            const jsonData = await response.json();

            setTodo(jsonData);


        }catch (err){
            console.log(err.message);
        }

    }


    //put the data in a state
    //empty array
    const [todos, setTodo] = useState([]);

    console.log(todos);


    return(
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
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
                ))}
                </tbody>
            </table>
        </Fragment>
    );
}

export default ListTodo;