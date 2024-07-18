import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Main } from './components/Main/Home/Main.jsx'
import { About } from './components/Main/About/About.jsx'
import { LatestCauses } from './components/Main/LatestCauses/LatestCauses.jsx'
import { Blog } from './components/Main/Blog/Blog.jsx'
import { SocialEvents } from './components/Main/Social Events/SocialEvents.jsx'
import { Contact } from './components/Main/Contact/Contact.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path='/' element={<App/>} >
      <Route path='' element={<Main/>} ></Route>
      <Route path='about' element={<About/>} ></Route>
      <Route path='latestcauses' element={<LatestCauses/>} ></Route>
      <Route path='blog' element={<Blog/>} ></Route>
      <Route path='socialevents' element={<SocialEvents/>} ></Route>
      <Route path='contacts' element={<Contact/>} ></Route>
    </Route>
  ])
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
