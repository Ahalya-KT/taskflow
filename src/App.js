import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import Taskflow from "./components/Taskflow";
import Task from "./components/Task";
import TrackTime from "./components/TrackTime";
import Messages from "./components/Messages";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <Messages/>
      </ChakraProvider>
    </div>
  );
}

export default App;
