import React, { useRef, useState } from 'react'
import 'F:/VC/MiniPrjct/chatui/node_modules/bootstrap/dist/css/bootstrap.min.css'
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import axios from 'axios'

function TextInput() {

  let [ip, setip] = useState('');
  let text = useRef();

  function getText(){
    let ftext = text.current.value.trim();

    let uname = JSON.parse(localStorage.getItem('UNAME'))
    if(!uname){
      uname='Hidden Angel'
    }

    let replyOn = JSON.parse(localStorage.getItem('REPLY'))
    if(!replyOn){
      replyOn=null
    }

    let textContent= {'textId':`${(window.location.pathname).slice(6)}.`,'textContent':[replyOn,null, ftext, uname]};
    
    axios.post(`http://localhost:5000/Chat=${(window.location.pathname).slice(6)}`,textContent);
    setip('')
    text.current.value='';
    localStorage.removeItem('REPLY')
  }

  return (
    <div className="input-group ">
        <div className="form-floating w-75">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{"height":"100px"}} ref={text} val={ip} onChange={(e) => setip(e.target.value)} />
            <label htmlFor="floatingTextarea2">{(ip.trim().length >20) ? '':'Comments'}</label>
        </div>
        <button className="btn btn-primary" type="button" id="button-addon2" onClick={getText} disabled={ip.trim().length >1 ? '' : 'disabled'}><SendTwoToneIcon/></button>
    </div>
    
  )
}

export default TextInput
