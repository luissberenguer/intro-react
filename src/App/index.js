import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";


function App() {

  React.useEffect( () => {
    console.log('use effect')
  }, [])

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
