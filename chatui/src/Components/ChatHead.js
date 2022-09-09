/* eslint-disable eqeqeq */
import React from 'react'
import ChatHeadDecor from './UI/ChatHeadDecor'

function ChatHead() {
    const data = JSON.parse(localStorage.getItem('data'))
    let loc = (window.location.pathname).slice(6); 
    /* eslint-disable react/no-direct-mutation-state */
    let extractor;
    if(data.length !== 0){
     extractor=  data.filter(item => item.id == loc);
    }
  return (
    <>
      {extractor.length > 0 && <ChatHeadDecor textHead={extractor[0]?.chatheader} text={extractor[0]?.chattext}/>}
      {extractor.length === 0 && <h1>Chat Does Not Exist</h1>}
    </>
  )
}

export default ChatHead
