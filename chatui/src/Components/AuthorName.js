import React, { useRef, useState } from 'react'
import 'F:/VC/MiniPrjct/chatui/node_modules/bootstrap/dist/css/bootstrap.min.css'

export function AuthorName(props) {

    const[uname,setUname]=useState('');
    const [currentName, setCurrentName]=useState((JSON.parse(localStorage.getItem('UNAME'))))
    const user=useRef();

    function saveUser(){
        const name = String(user.current.value.trim());
        localStorage.setItem('UNAME',JSON.stringify(name));
        props.dispAuth();
    }

  return (
    <div className="input-group flex-nowrap w-50">
        <span className="input-group-text" id="addon-wrapping">@</span>
        <input autoFocus type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" ref={user} onChange={(e)=>{setUname(e.target.value); setCurrentName(e.target.value)}} value={currentName!==null ? currentName: ''}></input>
        <button type="button" className="btn btn-info" disabled={uname.trim().length >0  ? '' : 'disabled'} onClick={saveUser} style={{opacity:'1'}} >Save</button>
    </div>
  )
}