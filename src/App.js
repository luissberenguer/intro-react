import React from "react";
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import './App.css';


const defaultTodos = [
  { text: 'Comprar mangos', completed: true },
  { text: 'Comprar mandarinas', completed: true },
  { text: 'Visitar a marga', completed: false },
  { text: 'Entrenar Jiu-jitsu', completed: false },
  { text: 'Estudiar React', completed: false },
]

function App() {
  
  const [ todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  console.log(`${completedTodos} todos completados`);

  let searchedTodos = [];

  if(!searchValue >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
    console.log(`${searchedTodos} searchedTodos`)
  }

  return (
    <React.Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
      

      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      

      <TodoList>
        {searchedTodos.map((todo) => (
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
