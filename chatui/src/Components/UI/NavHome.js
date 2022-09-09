import React from 'react'
import { useNavigate } from "react-router-dom";
import 'F:/VC/MiniPrjct/chatui/node_modules/bootstrap/dist/css/bootstrap.min.css'
import IosShareIcon from '@mui/icons-material/IosShare';
import classes from './NavHome.module.css'

function NavHome() {

    let navigate = useNavigate();

    function urlHandler(e){
        navigate(`/`);
    }

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-dark bg-gradient`} >
        <h2 className="navbar-brand position-absolute mt-5 mb-1 start-50 translate-middle" ><b className={classes.headName}>ChatterBox</b></h2>
        <p className="nav-link active mt-0 mb-1" aria-current="page" onClick={urlHandler}><IosShareIcon fontSize='large' style={{fill: "white"}}/></p>
    </nav>
  )
}

export default NavHome
