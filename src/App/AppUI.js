import React from "react";
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from "../TodoSearch";
import { TodoContext } from "../TodoContext";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import './App.css';
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {
  const { error,
          loading,
          searchedTodos,
          completeTodo,
          deleteTodo,
          openModal,
          setOpenModal,} = React.useContext(TodoContext);
  
    return (
        <React.Fragment>
      <TodoCounter />
      

      <TodoSearch />
      
      <TodoList>
      {error && <p className="loadingMessage" >Desesperate, hubo un error</p>}
      {loading && <p className="loadingMessage" >No desesperes, esta cargando...</p>}
      {(!loading && !searchedTodos.length ) && <p className="loadingMessage">Crea tu primer todo</p>}

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

    <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />

    {!!openModal && (
      <Modal>
      <TodoForm />
    </Modal>
    )} 
      
    </React.Fragment>
    )
}

export {AppUI}