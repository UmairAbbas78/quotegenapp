import React from "react";

export default function Quote(props){
    return(
        <div className = 'QouteContainer' id="quote-box" >
            <h3 className="qoute" id="text">{props.qoute}</h3>
            <h4 className="qoute-author" id="author">{props.author}</h4>
            <button id="new-quote" onClick={props.changeQuote}>Next</button>
            <a target="_blank" id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${props.qoute}\n-${props.author}`}><img src="https://img.icons8.com/fluency/344/stack-of-tweets.png"/></a>
        </div>
    );
}