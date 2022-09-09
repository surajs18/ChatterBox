import React from 'react'
import { Link } from 'react-router-dom'
import NavHome from '../Components/UI/NavHome'
import 'F:/VC/MiniPrjct/chatui/node_modules/bootstrap/dist/css/bootstrap.min.css'
import classes from './Home.module.css'

function Home() {
  return (
    <>
      <NavHome/>
      <div className={`${classes.bg}`} > 
        <h2 className='pt-3 text-light'><b>Join the conversation, Connect with people, Communicate with ease</b></h2>
        <p className='fs-4 ms-3 me-4 mb-0 pb-2'>
            Share ideas, thoughts, and opinions with like-minded people. You'll instantly form a community of people with the same interests as you.<br/><br/>

            Be part of a live group and find out what's going on in the moment. The chat room is always buzzing with activity.<br/><br/>

            Discover communities that share your interests and meet new people who have similar interests and goals to you. Whether it's job related or hobbies, there is a place for anyone!<br/><br/> 

            As much or as little socializing as you want - it's completely up to you! You can create groups for anything.
        </p>
      </div>
      <div className='bg-dark' >
          
          <p className='fs-5 text-light mt-0 pt-0 mb-0 pb-0'>Developers Contact Info</p>
            <div className='d-flex justify-content-evenly mt-0 pt-2'>
                <div className='fs-6 text-light '>
                    Suraj S <br/>
                    <Link to='#'onClick={(e) => {window.location = 'tel:9844722941'}} title="Phone Number">9844722941</Link><br/>
                    <Link to='#'onClick={(e) => {window.location = 'mailto:ksuraj626@gmail.com'}} title="MailUs">Mail Suraj</Link>
                </div>
                <div className='fs-6 text-light '>
                    Darshith S <br/>
                    <Link to='#'onClick={(e) => {window.location = 'tel:7349546760'}} title="Phone Number">7349546760</Link><br/>
                    <Link to='#'onClick={(e) => {window.location = 'mailto:darshithsuresh2001@gmail.com'}} title="MailUs">Mail Darshith</Link>
                </div>
          </div>
          <p className='text-light mt-1 pt-0 mb-0 pb-0'>Navigate to: <Link to='/DeveloperHelp'>Developer's-Help</Link></p>
      </div>
    </>
  )
}

export default Home
