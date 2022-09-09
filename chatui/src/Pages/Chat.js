import React, { useState } from 'react'
import Chats from '../Components/Chat'
import ChatHead from '../Components/ChatHead'
import ChatNav from '../Components/UI/ChatNav'
import classes from './Chat.module.css'
import TextInput from '../Components/TextInput'
import {AuthorName} from '../Components/AuthorName'


function Chat() {
  const [dispAuthSection, setAuth]=useState(false);
  
  function toggleAuth(){
    setAuth(!dispAuthSection);
  }
  
  return (
    <div className={classes.web}>
      <div className={classes.nav}>
        <ChatNav dispAuth={toggleAuth}/>
      </div>
      <div className={classes.page}>
          <ChatHead/>
         
          <Chats />
        <div className={classes.gap}/>
        <div className={classes.iptxt}>
        {dispAuthSection && <AuthorName dispAuth={toggleAuth}/>}
          <TextInput />
        </div>
      </div>
    </div>
  )
}

export default Chat
