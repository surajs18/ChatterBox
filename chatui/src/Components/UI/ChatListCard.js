import 'F:/VC/MiniPrjct/chatui/node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'F:/VC/MiniPrjct/chatui/node_modules/uikit/dist/css/uikit.min.css'
import classes from './ChatListCard.module.css'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const ChatListCard = props =>{
    let navigate = useNavigate();
    const [shadow, setshadow] = useState(false)

    function urlHandler(e){
        navigate(`/Chat=${e.currentTarget.id}`);
    }

    function shadowShow(e){
        setshadow(!shadow);
    }

    return(
        <div className={`card ${shadow ?(`${classes.bgdiscord}`):''} `} style={{width: "18rem"}} onMouseEnter={shadowShow} onMouseLeave={shadowShow}>
            <div className="card-body">
                <h5 className={`card-title`}> <b className={shadow ? 'text-white':''} style={{cursor: 'context-menu'}}>
                    {props.chathead.length<=26 ? props.chathead.substring(0,26) : props.chathead.substring(0,23)+'...'}
                    </b></h5>
                <p className={`card-text`} style={{cursor: 'context-menu'}}>{props.chatbody.length<=27 ? props.chatbody.substring(0,27) : props.chatbody.substring(0,24)+'...'}</p>
                <button onClick={urlHandler} id={props.chatid} className="btn btn-primary">Get Into Chat</button>
            </div>
        </div>
    );
}

export default ChatListCard;