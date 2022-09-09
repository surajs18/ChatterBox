import React from 'react'
import { Link } from 'react-router-dom'
import NavHome from '../Components/UI/NavHome'
import 'F:/VC/MiniPrjct/chatui/node_modules/bootstrap/dist/css/bootstrap.min.css'

function DeveloperHelp() {
  return (
    <>
      <NavHome/>
      <div className={`container`} > 
        <h2 className='pt-3 text-dark'><b>Tips for Developers to build on API</b></h2>
        <div className='fs-4 ms-3 me-4 mb-0 pb-3'>
            <h4 className="list-group-item-info display-6"><b>GET API's:</b></h4>
            <ul className="list-group">
                <li className="list-group-item list-group-item-info">
                    To get the details of all the chats 
                    <pre>async function fetchPosts() &#123; <br/>
                        const res=await axios.get("http://localhost:5000/").then(res =&#62; console.log(res.data)).catch(res =&#62; []);<br/>
                        &#10101;<br/>
                        fetchPosts();
                    </pre>
                </li>
                <li className="list-group-item list-group-item-info">
                To get the messages from the chat by given chat ID
                <pre>async function fetchPosts() &#123; <br/>
                        const res=await axios.get("http://localhost:5000/Chat= <abbr title='Enter required Chat ID'>ID</abbr>").then(res =&#62; console.log(res.data)).catch(res =&#62; []);<br/>
                        &#10101;<br/>
                        fetchPosts();
                    </pre>
                </li>
            </ul>
            <h4 className="list-group-item-danger display-6"><b>POST API's:</b></h4>
            <ul className="list-group">
                <li className="list-group-item list-group-item-danger">
                    To create a chat
                    <pre>axios.post('http://localhost:5000/',<abbr title='Enter the chat details to be created'>Chat_Created</abbr>);
                    </pre>
                    Format to send the details of a created chat
                    <pre className='bg-secondary text-white'>
                    &#123; <br/>
                        "chatheader": "Subject of the chat", <br/>
                        "chattext": "Detailed explaination of the chat"<br/>
                    &#10101;
                    </pre>
                </li>
                <li className="list-group-item list-group-item-danger">
                To insert a message into the chat
                <pre>axios.post('http://localhost:5000/Chat=<abbr title='Enter required Chat ID'>ID</abbr>',<abbr title='Enter the text body to be sent as a message'>text_body</abbr>);
                </pre>
                Format to send the message to a created chat
                    <pre className='bg-secondary text-white'>
                    &#123; <br/>
                        "textId": "ChatID.",<br/>
                        "textContent": ["Text ID of replying", null, "Text message", "Author Name"]<br/>
                    &#10101;
                    </pre>
                </li>
            </ul>
            <p>For detailed explaination on axios visit <Link to='#' onClick={(e) => {window.open ('https://axios-http.com/docs/intro')}}>axios-http.com</Link></p>
        </div>

        
      </div>
      <div className='bg-dark' >
          
          <p className='fs-5 text-light mt-0 pt-0'>Developers Contact Info</p>
            <div className='d-flex justify-content-evenly mt-0 pt-2'>
                <div className='fs-6 text-light'>
                    Suraj S <br/>
                    <Link to='#'onClick={(e) => {window.location = 'tel:9844722941'}} title="Phone Number">9844722941</Link><br/>
                    <Link to='#'onClick={(e) => {window.location = 'mailto:ksuraj626@gmail.com'}} title="MailUs">Mail Suraj</Link>
                </div>
                <div className='fs-6 text-light '>
                    Darshith S <br/>
                    <Link to='#'onClick={(e) => {window.location = 'tel:7349546760'}} title="Phone Number">7349546760</Link><br/>
                    <Link to='#'onClick={(e) => {window.location = 'mailto:darshithsuresh2001@gmail.com'}} title="MailUs">Mail Darshith</Link>
                </div>
          </div>
          <p className='text-light mb-0 pb-0'>Navigate to: <Link to='/Home'>Home</Link></p>
      </div>
    </>
  )
}

export default DeveloperHelp
