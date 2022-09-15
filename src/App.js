import { useState } from "react";
import "./App.css";
import { TodoContext } from "./components/context/TodoContext";
import Main from "./components/Main";

const App = () => {
  const [click, setClick] = useState(false);
  return (
    <TodoContext.Provider value={{ click, setClick }}>
      <Main />
    </TodoContext.Provider>
  );
};

export default App;
