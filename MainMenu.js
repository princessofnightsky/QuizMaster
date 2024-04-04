import React, {useContext} from 'react';
import { QuizContext } from './Helpers/Context';
import "../App.css";

export default function MainMenu() {
 const {gameState, setGameState}= useContext(QuizContext);
  return (
    <div className='Menu'>

     <button 
      onClick={() =>{
        setGameState("Quiz")
        }}
        >
        Start Quiz</button>
    </div>
  )
}
