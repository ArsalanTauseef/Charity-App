import React from 'react'
import './contact.css'
import { FaHome } from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";
import { MdAttachEmail } from "react-icons/md";

export const Contact = () => {
  return (
   <>
     <div className='contactsPage'>
        <h1>Contacts</h1>
    </div>
    <div className='contactsMain'>
      <div className='contactsDetails'>
        <div id='a1'>
          <h3>Get In Touch</h3>
        </div>
        <div id='a2'>
          <textarea placeholder='Enter Message'></textarea>
        </div>
        <div id='a3'>
          <input type="text" placeholder='Enter your name' />
        </div>
        <div id='a4'>
          <input type="text" placeholder='Email'/>
        </div>
        <div id='a5'>
          <input type="text" placeholder='Enter Subject' />
        </div>
        <div id='a6'>
          <button>SEND</button>
        </div>
      </div>

      <div className='contactsDetails2'>
        <div id='dFlex'>
        <span id='a'><FaHome/></span>
          <span>
            <h3>Buttonwood, California.</h3>
            <p>Rosemead, CA 91770</p>
          </span>
          
        </div>
        <div id='dFlex'>
          <span id='a'><GiSmartphone/></span>
          <span>
            <h3>+1 253 565 2365</h3>
            <p>Mon to Fri 9am to 6pm</p>
          </span>
          
        </div>
        <div id='dFlex'>
        <span id='a'><MdAttachEmail/></span>
          <span>
            <h3>support@colorlib.com</h3>
            <p>Send us your query anytime!</p>
          </span>
        </div>
      </div>
    </div>
   </> 
  )
}
