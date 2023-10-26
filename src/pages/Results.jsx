import { Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Results = () => {
    const score = useSelector((store) => {
        return store.quizReducer.score;
      });
      const Percentage = useSelector((store) => {
        return store.quizReducer.Percentage;
      });
  return (
    <DIV>
        <Heading>Your Results</Heading>
        <Text fontSize='xl'>Score: {score}</Text>
        <Text fontSize='xl'>Percentage: {`${Percentage}%`}</Text>
    </DIV>
  )
}

export default Results

const DIV=styled.div`
width: 60%;
margin: auto;
margin-top: 100px;
background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(176,229,208,1) 42%, rgba(92,202,238,0.41) 93.6% );
padding: 4%;
border-radius: 15px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

p{
    padding: 1%;
}
`