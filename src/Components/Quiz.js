import React ,{useState ,useContext} from 'react';
import { QuizContext } from './Helpers/Context';
import { Questions } from './Helpers/QuestionBank';
function Quiz() {
    const {score, setScore ,setGameState}= useContext(QuizContext);
    const [currQuestion, setCurrQuestion] = useState(0);
    const[optionChosen , setOptionChosen] =useState("");

    const nextQuestion = () =>{
        if(Questions[currQuestion].answer == optionChosen){
         setScore(score+1);
        }
        
        setCurrQuestion(currQuestion+1);
    };
    const finishQuiz =()=>{
        if(Questions[currQuestion].answer == optionChosen){
            setScore(score+1);
        }
        setGameState("EndScreen")
    }

  return (
    <div className="Quiz">
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className='options'>
        <button onClick={()=>setOptionChosen("A")}>{Questions[currQuestion].optionA }{" "}</button>
        <button onClick={()=>setOptionChosen("B")}>{Questions[currQuestion].optionB }{" "}</button>
        <button onClick={()=>setOptionChosen("c")}>{Questions[currQuestion].optionC }{" "}</button>
      </div>
       {currQuestion == Questions.length-1 ?(
       <button onClick={finishQuiz}>Finish Quiz</button>
       ): (
     <button onClick={nextQuestion}> Next Question</button>
       )}
    </div>

  )
}

export default Quiz;