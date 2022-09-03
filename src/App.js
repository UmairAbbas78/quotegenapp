import logo from './logo.svg';
import './App.css';
import Quote from './Quote';
import React from "react"

export default function App() {

  
  React.useEffect(()=>fetchQuote,[quotes]);
  
  async function fetchQuote(){
    let response = await fetch('http://api.quotable.io/random');
    let data = await response.json();
    if(response){
      console.log(data.content);
      console.log(data.author);
    }
    setQuotes(data.content);
    setAuthor(data.author);
  }
  const [quotes,setQuotes] = React.useState("");
  const [author,setAuthor] = React.useState("");

  

  function click(){    
    fetchQuote();
  }

  return (
    <div className="App">
      <Quote qoute = {quotes} author = {author} changeQuote={click}/>
    </div>
  ); 

}