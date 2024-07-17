import React from 'react'
import './Main.css'

export const Main = () => {
  return (
    <>
    <main className='mainPage'>
            <div>
                <ul>
                    <li><h1 style={{fontSize:'88px'}}>Our Helping To The World.</h1></li>
                    <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, laborum.</p></li>
                    <li id='li1'><span><button id='btn1'>Donate</button></span> <span>+12 1325 41</span></li>
                </ul>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
    </main>
    </>
  )
}
