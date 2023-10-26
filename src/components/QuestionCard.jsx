import { Heading, Text } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

const QuestionCard = ({question,correct_answer,incorrect_answers,handleOptions}) => {
  return (
    <DIV>
        <Heading as='h4' size='lg' padding={"2%"}>{question}</Heading>
        <Text border='1px solid blue' width={"80%"} padding={"2%"} margin="auto" onClick={()=>handleOptions(correct_answer)}>{correct_answer}</Text>
        {incorrect_answers.map((el)=>(
            <Text key={el} border='1px solid blue' padding={"2%"} width={"80%"} margin="auto"  onClick={()=>handleOptions(el)}>{el}</Text>
        ))}
    </DIV>
  )
}

export default QuestionCard


const DIV=styled.div`
width: 60%;
margin: auto;
background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(176,229,208,1) 42%, rgba(92,202,238,0.41) 93.6% );
padding: 4%;
border-radius: 15px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

p{
    font-size: 20px;
    border-radius: 10px;
    margin-bottom: 10px;
}
p:hover{
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
`