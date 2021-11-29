import React from "react";
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import './App.css';


const todos = [
  { text: 'Comprar mangos', completed: true },
  { text: 'Comprar mandarinas', completed: true },
  { text: 'Visitar a marga', completed: true },
  { text: 'Entrenar Jiu-jitsu', completed: false },
  { text: 'Estudiar React', completed: false },
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      

      <TodoSearch />
      

      <TodoList>
        {todos.map((todo) => (
          <TodoItem 
          completed={todo.completed}
          key={todo.text} 
          text={todo.text}/>
        ) )}
      </TodoList>

      <CreateTodoButton/>
      
    </React.Fragment>
  );
}

export default App;
