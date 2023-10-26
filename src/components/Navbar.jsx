import { Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <DIV>
        <Link to='/'>
            <Heading as='h3' size='lg'>Masai Quiz</Heading>
        </Link>
        <Link to='/dashboard'>
            <Heading as='h3' size='lg'>Dashboard</Heading>
        </Link>
    </DIV>
  )
}

export default Navbar

const DIV=styled.div`
display: flex;
justify-content: space-around;
background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(176,229,208,1) 42%, rgba(92,202,238,0.41) 93.6% );
padding: 1%;
h3{
    color: #054728;
}
`