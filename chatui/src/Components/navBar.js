import 'F:/VC/MiniPrjct/chatui/node_modules/bootstrap/dist/css/bootstrap.min.css'
import classes from './navBar.module.css'
import React,{ useRef} from 'react'
import { useNavigate } from "react-router-dom";
import AddBoxIcon from '@mui/icons-material/AddBox';
import HomeIcon from '@mui/icons-material/Home';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';


const NavBar = (props) =>{

    let search = useRef();
    let sender;
    function searchHandler(e) {
        e.preventDefault();
        sender=search.current.value
        props.onsearch(sender);
        search.current.value='';
    }

    let navigate = useNavigate();

    function urlHandler(e){
        navigate(`/Home`);
    }
    function DevHandler(e){
        navigate(`/DeveloperHelp`);
    }

    return(
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <p className="navbar-brand" style={{'fontSize':'2rem', 'paddingBottom':'0rem'}}>ChatterBox</p>
                
                <ul className={` me-auto mb-2 mb-lg-0 ${classes.symbols}`}>
                    <li className="nav-item">
                        <p className="nav-link active" aria-current="page" onClick={urlHandler}><HomeIcon fontSize='large' style={{fill: "white"}}/></p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link" onClick={props.onChatMaker}><AddBoxIcon fontSize='large' style={{fill: "white"}}/></p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link" onClick={DevHandler}><DeveloperModeIcon fontSize='large' style={{fill: "white"}}/></p>
                    </li>
                </ul>  
                        
                
                    <form className="d-flex" onSubmit={searchHandler}>
                        <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search" ref={search} />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                
            </div>
        </nav>
    );
}

export default NavBar;