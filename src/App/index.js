import React from "react";
import './App.css';
import { AppUI } from "./AppUI";


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

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos);
  }

  return (
    <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}

    />
  );
}

export default App;
