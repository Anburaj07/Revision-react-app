import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Quiz from '../pages/Quiz'
import Dashboard from '../pages/Dashboard'
import Results from '../pages/Results'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/results' element={<Results/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  )
}

export default AllRoutes