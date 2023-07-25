import { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/apis/todosApi"

export const TodoApp = () => {

    // const {data: todos=[], isLoading} = useGetTodosQuery();

    const [todoId, setTodoId] = useState(1);

    const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);

    const nextTodo = () =>{
        setTodoId( todoId + 1 );
    }

    const prevTodo = () =>{
        if( todoId === 1 ) return;
        setTodoId( todoId - 1 );
    }

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>IsLoading: {isLoading ? 'True' : 'False'}</h4>

            <pre>{JSON.stringify(todo)}</pre>

            {/* <ul>
                {
                    todos.map( todo =>(
                        <li key={todo.id}>
                            <strong>{todo.completed ? 'DONE': 'Pending'}</strong>
                             {todo.title}
                        </li>
                    ))
                }
            </ul> */}

            <button
                onClick={prevTodo}
            >
                Prev Todo
            </button>

            <button 
                onClick={nextTodo}
            >
                Next Todo
            </button>
        </>
    )
}
