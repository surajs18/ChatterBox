import React from 'react'
import 'F:/VC/MiniPrjct/chatui/node_modules/bootstrap/dist/css/bootstrap.min.css'
import TextCard from './TextCard'

function TextDecor(props) {
  return (
      <TextCard textId={props.textId} replyto={props.replyto} sharedFile={props.sharedFile} textContent={props.textContent} author={props.author}/>
  )
}

export default TextDecor
