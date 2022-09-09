import React from 'react'
import 'F:/VC/MiniPrjct/chatui/node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function ChatNav(props) {
    let navigate = useNavigate();

    function urlHandler(e){
        navigate(`/`);
    }

    function Home(e){
        navigate(`/Home`);
    }

  return (
    <ul className={`nav flex-column bg-dark vh-110 `}>
        <li className="nav-item">
            <p className={`nav-link`} active='true' aria-current="page" onClick={Home}><HomeIcon style={{fill: "white"}}/></p>
        </li>
        <li className="nav-item" >
            <p className={`nav-link`} onClick={urlHandler}><ArrowLeftRoundedIcon style={{fill: "white",}}/></p>
        </li>
        <li className="nav-item">
            <p className={`nav-link`} onClick={props.dispAuth}><PersonAddIcon style={{fill: "white"}} /></p>
        </li>
    </ul>
  )
}

export default ChatNav
