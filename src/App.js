import logo from './logo.svg';
import './App.css';
import Quote from './Quote';
import React from "react"

export default function App() {

  const [quotes,setQuotes] = React.useState("It isn't what happens to us that causes us to suffer; it's what we say to ourselves about what happens.");
  const [author,setAuthor] = React.useState("Pema Chödrön");
  const [count,changeCount] = React.useState(0);

  
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
  React.useEffect(()=>fetchQuote,[count]);

  function click(){    
    changeCount(count+1);
  }

  return (
    <div className="App">
      <Quote qoute = {quotes} author = {author} changeQuote={click}/>
    </div>
  ); 

}