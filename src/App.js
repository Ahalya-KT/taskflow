import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import Taskflow from "./components/Taskflow";
import Task from "./components/Task";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
       <Task/>
      </ChakraProvider>
    </div>
  );
}

export default App;
