import styled from "styled-components"
import Totalscore from "./Totalscore"
import NumberSelector from "./NumberSelector"
import RollDice from "./RollDice"
import { useState } from "react"
import { Button, OutlineButton } from "../styled/Buttons"
import Rules from "./Rules"


const Gameplay = () => {
    const [score,setScore]= useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError]= useState("");
    const [showRules, setShowRules]= useState(false)

    const genRand = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
     };
     
    
     const rollDice = () =>{
        if(!selectedNumber) {
            setError("You have not selected any number")
            return;
        }
       
         const randomNum= genRand(1,7);
         setCurrentDice(randomNum);

         if(selectedNumber===randomNum)
            setScore(score+randomNum)
        else
        setScore(score-2)
        setSelectedNumber(undefined);
     }

     const resetScore = () =>{
        setScore(0);
     }

    return (
        <Main>
          <div className="top-section">
          <Totalscore score={score}/>
          <NumberSelector
          error={error} 
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}/>
          </div>
          <RollDice 
          currentDice={currentDice}
          rollDice={rollDice}
          />
          <div className="btns">
            <OutlineButton onClick={resetScore} >Reset Score</OutlineButton>
            <Button 
            onClick={()=> setShowRules(!showRules)}
            >{showRules ? "Hide" : "Show"} Rules </Button>
          </div>
        
          {showRules && <Rules />}
        </Main>
    )
}

export default Gameplay

const Main = styled.div`

padding-top: 70px;

.top-section{
    display: flex;
    align-items: end;
    justify-content: space-around;
    
}

.btns{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
`
