import React, { useRef, useState } from 'react' 
import 'F:/VC/MiniPrjct/chatui/node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'


const CreateChatSection = (props) => {

    const chatHead=useRef();
    const chatBody=useRef();

    const [chatH, setChatH]=useState('');
    const [chatB, setChatB]=useState('');
    
  
    function clickHandler(e){
        let head=chatHead.current.value;
        let body=chatBody.current.value;
        let chatCreated={chatheader: head, chattext: body};
        props.onChatMaker();
        axios.post('http://localhost:5000/',chatCreated);
    }

  return (
    <>
        <div className="input-group input-group-lg">
            <span className="input-group-text" id="inputGroup-sizing-lg">Chat Name</span>
            <input autoFocus type="text" className="form-control" placeholder='Subject of your query' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" ref={chatHead}  onChange={(e)=>setChatH(e.target.value)}/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">Detailed Query</span>
            
            <textarea className="form-control" placeholder="Explain your query" id="floatingTextarea"ref={chatBody}onChange={(e)=>setChatB(e.target.value)}/>
            <button type="button" className="btn btn-primary" onClick={clickHandler} disabled={(chatH.trim().length >1 && chatB.trim().length >1) ? '' : 'disabled'}>Create Chat Section</button>
        </div>
    </>
  )
}

export default CreateChatSection;
