/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React from 'react'
import 'F:/VC/MiniPrjct/chatui/node_modules/bootstrap/dist/css/bootstrap.min.css'
import ReplyIcon from '@mui/icons-material/Reply';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Linkify from 'react-linkify';

function TextCard(props) {
  let rplyto = props.replyto
  const texts = JSON.parse(localStorage.getItem((window.location.pathname).slice(6)))
  let extractor
  if(texts !== undefined)
    {extractor=  texts.filter((item) =>rplyto!=null ? item.textId == rplyto : null)}
  

  const handleGoogleClick = () => {
    window.open(`https://www.google.com/search?q=${props.textContent}`);
  };

  const handleYoutubeClick = () => {
    window.open(`https://www.youtube.com/results?search_query=${props.textContent}`);
  };

  const handleReply=()=>{
    let replyOn= props.textId;
    localStorage.setItem('REPLY',JSON.stringify(replyOn));
    
  }

  return (
    <div className="card" style={{ border:"none", justifyItems:"center"}}>
        <div className="card-body">
            
            { extractor[0]?.textContent[2] && <div className="card-footer border mb-1 text-muted">Reply To: {extractor[0]?.textContent[2].substring(0,35)+'...\t|'} Author: {props.author.substring(0,15)+'...'}</div>}
            
            {/* <h5 className="card-title">{props.sharedFile}</h5> */}
            <Linkify properties={{
              target: '_blank'
            }}>
            <div className="card-text">{props.textContent.split(/\n/).map(line => <p key={line}>{line}</p>)}</div>
            </Linkify>
            <footer className="blockquote-footer">Name: <cite title="Source Title">{props.author}</cite></footer>
            
            <button className="card-link btn btn-success" onClick={handleReply}>Reply <ReplyIcon sx={{ paddingBottom:'5%' }}/></button>
            <button className="card-link btn btn-primary" onClick={handleGoogleClick}><GoogleIcon sx={{ paddingBottom:'5%' }}/>Google</button>
            <button className="card-link btn btn-danger" onClick={handleYoutubeClick}><YouTubeIcon sx={{ paddingBottom:'3%', fontSize: '170%' }}/>YouTube</button>
            
        </div>
    </div>
  )
}

export default TextCard
