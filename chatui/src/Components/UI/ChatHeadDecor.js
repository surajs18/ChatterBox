import React from 'react'

function ChatHeadDecor(props) {
  return (
        <div className="card text-center mt-1" style={{borderColor : 'rgb(2 2 26 / 80%)'}}>
            <div className="card-header" style={{backgroundColor : 'rgb(2 2 26 / 80%)'}}>
              <h3 className="card-title"><b style={{cursor: 'context-menu', color: 'white'}}>{props.textHead.split(/\n/).map(line => <div key={line}>{line}</div>)}</b></h3>
            </div>
            <div className="card-body">
                <p className="card-text" style={{cursor: 'context-menu'}}>{props.text}</p>
            </div>
        </div>
  )
}

export default ChatHeadDecor

