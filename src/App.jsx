
import Home from "./components/Home"
import "./App.css"
import { useState } from "react"
import Gameplay from "./components/Gameplay"


function App() {

const [isGameStarted, setIsGameStarted] = useState(false);

const toggleGame = () => {
  setIsGameStarted((prev) => !prev);
};
  return (
    <div>
      {isGameStarted ? <Gameplay /> : <Home toggle={toggleGame} />}
    </div>
  )
}

export default App
