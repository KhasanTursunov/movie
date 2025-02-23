import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { SuspenseContainer } from '../utils'
const Home = lazy(()=> import("../pages/home/Home"))
const Contact = lazy(()=> import("../pages/contact/Contact"))
const Movies = lazy(()=> import("../pages/movies/Movies"))
const Saved = lazy(()=> import("../pages/saved/Saved"))
const Layout = lazy(()=> import("../pages/layout/Layout"))
const Detail = lazy(()=> import("../pages/detail/Detail"))

const RouterMain = () => {
  return (
    <div className='dark:bg-gray-950 dark:text-white'>
    <Routes>
        <Route path='/' element={<SuspenseContainer><Layout/></SuspenseContainer>}>
            <Route path='/' element={<SuspenseContainer><Home/></SuspenseContainer>}/>
            <Route path='contact' element={<SuspenseContainer><Contact/></SuspenseContainer>}/>
            <Route path='movies' element={<SuspenseContainer><Movies/></SuspenseContainer>}/>
            <Route path='saved' element={<SuspenseContainer><Saved/></SuspenseContainer>}/>
            <Route path='movie/:id' element={<SuspenseContainer><Detail/></SuspenseContainer>}/>
        </Route>
    </Routes>
    </div>
  )
}

export default RouterMain