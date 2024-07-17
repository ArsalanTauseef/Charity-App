import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Main } from './components/Main/Home/Main.jsx'
import { About } from './components/Main/About/About.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path='/' element={<App/>} >
      <Route path='' element={<Main/>} ></Route>
      <Route path='about' element={<About/>} ></Route>
    </Route>
  ])
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
