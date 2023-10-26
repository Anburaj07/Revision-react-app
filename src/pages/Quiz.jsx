import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuestionCard from "../components/QuestionCard";
import styled from "styled-components";
import { Button } from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import { postScore } from "../redux/questionsRedux/action";
import { useNavigate } from "react-router-dom";
const Quiz = () => {
    const toast = useToast()
  const questions = useSelector((store) => {
    console.log("store:", store);
    return store.quizReducer.questions;
  });

  console.log(questions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score,setScore]=useState(0)
  const [CorrectAnswersCount,setCorrectAnswersCount]=useState(0)
  const [InCorrectAnswersCount,setInCorrectAnswersCount]=useState(0)
  const [Percentage,setPercentage]=useState(0)
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const name = useSelector((store) => {
    return store.quizReducer.name;
  });

  const handleOptions=(ans)=>{
    // console.log(ans)
    if(ans==questions[currentQuestion].correct_answer){
        setScore((prev)=>prev+10)
        setCorrectAnswersCount((prev)=>prev+1)
        setPercentage((prev)=>prev+10)
        toast({
            title: 'Correct answer!.',
            // description: "We've created your account for you.",
            status: 'success',
            duration: 6000,
            isClosable: true,
          })
        console.log(score)
    }else{
        setInCorrectAnswersCount((prev)=>prev+1)
        toast({
            title: 'Incorrect answer!.',
            // description: "We've created your account for you.",
            status: 'error',
            duration: 6000,
            isClosable: true,
          })
    }
  }
  useEffect(()=>{

  },[currentQuestion])

  const handleSubmit = () => {    
    dispatch(postScore(score,CorrectAnswersCount,InCorrectAnswersCount,Percentage,name))
    navigate('/results')
  };
  return (
    <DIV>
        <QuestionCard {...questions[currentQuestion]} handleOptions={handleOptions} />

      <BUTTONDIV>
        <Button
          disabled={currentQuestion == 0}
          onClick={((e) => setCurrentQuestion((prev) => prev - 1))}
        >
          Previous
        </Button>
        {currentQuestion == questions.length - 1 ? (
          <Button onClick={handleSubmit}>submit</Button>
        ) : (
          <Button
            onClick={((e) => setCurrentQuestion((prev) => prev + 1))}
          >
            next
          </Button>
        )}
      </BUTTONDIV>      
    </DIV>
  );
};

export default Quiz;

const DIV=styled.div`
width: 70%;
margin: auto;
margin-top: 50px;
display: flex;
flex-direction: column;
justify-content: space-around;
padding: 1%;
`

const BUTTONDIV=styled.div`
width: 70%;
margin: auto;
display: flex;
justify-content: space-around;
/* border: 1px solid red; */
padding: 1%;
`