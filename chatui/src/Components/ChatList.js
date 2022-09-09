import ChatListCard from './UI/ChatListCard' 
import 'F:/VC/MiniPrjct/chatui/node_modules/bootstrap/dist/css/bootstrap.min.css'
import classes from './ChatList.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'


const ChatList = (props) => {
    let listchat
    let search = props.search;  

    const [data, setData] = useState([])
    const [reload, setReload] = useState(0)

    useEffect(()=>{
        const timer=setTimeout(()=>{const fetchPosts=async ()=>{
          const res=await axios.get("http://localhost:5000/").then().catch(res => []);
          setData(res.data)
          setReload(reload+1)
          localStorage.setItem('data',JSON.stringify(res.data))
        }
        fetchPosts() },700); return ()=>{clearTimeout(timer)}
      },[reload])
     

    if(search ){ 
        listchat = data.map((chat) =>  (chat.chatheader.toLowerCase().includes(search.toLowerCase()) || chat.chattext.toLowerCase().includes(search.toLowerCase())) && (< li key = { chat.id } id={chat.id} className='gy-4' >
        <ChatListCard chathead={chat.chatheader} chatbody={chat.chattext} chatid={chat.id}/> </li>))
    }
    else{
        listchat = data.map((chat) => < li key = { Number(chat.id) } id={chat.id} className='gy-4' >
        <ChatListCard chathead={chat.chatheader} chatbody={chat.chattext} chatid={chat.id}/> </li>)
    }

        return (
            <>
                
                {search && (
                    <div>
                        <h2>Searching on <em>'{search}'</em></h2> 
                        <h4>To stop seachring <u>Click on Search Again</u></h4>
                    </div>)}
                
                <div className="container">
                    {data.length > 0 && <ul className={`row row-cols-auto justify-content-md-center  ${classes.list}`} > { listchat } </ul>} 
                    {data.length === 0 && <div style={{marginTop: '10%', fontWeight: '500', fontSize: '150%'}}>Its So Empty Here</div>}
                </div> 
            </> );
}

export default ChatList;