import React, { useEffect, useState } from 'react'
import TextDecor from './UI/TextDecor'
import axios from 'axios'

function Chat() {

  const [texts, setTexts] = useState([])
  const [reload, setReload] = useState(0)

  useEffect(()=>{
    const timer=setTimeout(()=>{const fetchPosts=async ()=>{
      let loc = (window.location.pathname).slice(6); 
      const res=await axios.get(`http://localhost:5000/Chat=${loc}`).catch(res=>['error']);
      if(res.data!==undefined)
        setTexts(res.data);
      setReload(reload+1);
      localStorage.setItem(loc, JSON.stringify(texts));
    }
    fetchPosts()},1000); return ()=>{clearTimeout(timer)}
  },[reload,texts])

  
  let textlist
    if(texts.length !==0 ){
       textlist = texts.map((text)=> <li key={text.textId} className="list-group-item" id={text.textId}><TextDecor textId={text.textId} replyto={text.textContent[0]} sharedFile={text.textContent[1]} textContent={text.textContent[2]} author={text.textContent[3]}/></li>)
    }

  return (
    <>
      
      {texts.length !== 0 &&<ul className="list-group">{textlist}</ul>}
      {(texts.length === 0 ) && <div style={{marginTop: '10%', fontWeight: '500', fontSize: '150%'}}>Create a Chat / <br/>Add a Comment</div>}
    </>
  )
}

export default Chat
