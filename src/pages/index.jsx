import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { SuspenseContainer } from '../utils'
const Home = lazy(()=> import("../pages/home/Home"))
const Contact = lazy(()=> import("../pages/contact/Contact"))
const Movies = lazy(()=> import("../pages/movies/Movies"))
const Saved = lazy(()=> import("../pages/saved/Saved"))
const Layout = lazy(()=> import("../pages/layout/Layout"))
const Detail = lazy(()=> import("../pages/detail/Detail"))
const SearchPage = lazy(()=> import("./search/SearchPage"))

const RouterMain = () => {
  return (
    <div className='dark:bg-gray-950 dark:text-white'>
    <Routes>
        <Route path='/' element={<SuspenseContainer><Layout/></SuspenseContainer>}>
            <Route path='/' element={<SuspenseContainer><Home/></SuspenseContainer>}/>
            <Route path='contact' element={<SuspenseContainer><Contact/></SuspenseContainer>}/>
            <Route path='movies' element={<SuspenseContainer><Movies/></SuspenseContainer>}/>
            <Route path='saved' element={<SuspenseContainer><Saved/></SuspenseContainer>}/>
            <Route path='search' element={<SuspenseContainer><SearchPage/></SuspenseContainer>}/>
            <Route path='movie/:id' element={<SuspenseContainer><Detail/></SuspenseContainer>}/>
        </Route>
            <Route path='*' element={<SuspenseContainer><div><h2 className='text-8xl text-center'>404</h2></div></SuspenseContainer>}/>
    </Routes>
    </div>
  )
}

export default RouterMain