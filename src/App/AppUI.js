import React from "react";
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from "../TodoSearch";
import { TodoContext } from "../TodoContext";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import './App.css';

function AppUI() {
  const { error,
          loading,
          searchedTodos,
          completeTodo,
          deleteTodo} = React.useContext(TodoContext);
  
    return (
        <React.Fragment>
      <TodoCounter />
      

      <TodoSearch />
      
      <TodoList>
      {error && <p>Desesperate, hubo un error</p>}
      {loading && <p>No desesperes, esta cargando...</p>}
      {(!loading && !searchedTodos.length ) && <p>Crea tu primer todo</p>}

      {searchedTodos.map((todo) => (
        <TodoItem 
        completed={todo.completed}
        key={todo.text} 
        text={todo.text}
        onComplete={() => completeTodo(todo.text)}
        onDelete={() => deleteTodo(todo.text)}
        />
      ) )}
    </TodoList>
  

      <CreateTodoButton/>
      
    </React.Fragment>
    )
}

export {AppUI}