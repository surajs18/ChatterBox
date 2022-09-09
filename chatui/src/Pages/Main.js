import React,{ useState } from 'react' 
import 'F:/VC/MiniPrjct/chatui/node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from '../Components/navBar';
import ChatList from '../Components/ChatList';
import CreateChatSection from '../Components/CreateChatSection';

function Home() {


    let [creator, setCreator] = useState(false)

    function chatMaker(){
      setCreator(!creator)
    }
    
    let [search, setsearch]=useState('');
    
    function separser(sender){
        setsearch(sender) ; 
    }

  return (
    < > 
      <NavBar onsearch={separser} onChatMaker={chatMaker}/>
      {creator && <CreateChatSection onChatMaker={chatMaker}/>}
        
      <ChatList search={search} /> 
    </>
  )
}

export default Home
