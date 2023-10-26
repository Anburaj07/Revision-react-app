import { Heading, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const Dashboard = () => {
    const [users,setUsers]=useState('');
    useEffect(()=>{
        axios.get(`https://quiz-server-bue2.onrender.com/users`)
        .then((res)=>{
            let arr=res.data;
            arr.sort((a,b)=>b.scores-a.scores)
            setUsers(arr)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <DIV>
        <Heading marginBottom="15px" as='h3' size='lg'>Users List</Heading>
        <Table>
            <Thead>
                <Th>USERNAME</Th>
                <Th>SCORES</Th>
            </Thead>
            <Tbody>
                {users&& users.map((el)=>(
                    <Tr key={el.id}>
                        <Td>{el.name}</Td>
                        <Td>{el.scores}</Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    </DIV>
  )
}

export default Dashboard


const DIV=styled.div`
width: 60%;
margin: auto;
margin-top: 100px;
background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(176,229,208,1) 42%, rgba(92,202,238,0.41) 93.6% );
padding: 4%;
border-radius: 15px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

th{
font-size: 20px;
}
font-size: 23px;
`