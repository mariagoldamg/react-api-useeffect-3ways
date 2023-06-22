
import { useCallback, useEffect, useState } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('')


// WAY 1 the best one
/*
  useEffect(()=>{
    const getQuote = async()=>{
      const response = await fetch('https://api.quotable.io/random ');
      const data = await response.json();
      setQuote(data.content);
      setAuthor (data.author)
    }
    getQuote()
  }, [])
*/

//WAY 2
/*
useEffect(()=>{
  getQuote()
},[])

const getQuote = async() =>{
  const response = await fetch ('https://api.quotable.io/random ');
  const data = await response.json();
  setQuote(data.content);
  setAuthor (data.author)
}
*/

//WAY 3

const getQuote = useCallback (async()=>{
  const response = await fetch ('https://api.quotable.io/random ');
  const data = await response.json();
  setQuote(data.content);
  setAuthor (data.author)
},[])

useEffect(()=>{
getQuote()
},[getQuote])


  return (
    <div className="App">
<h2>{quote}</h2>
<h3>{author}</h3>
    </div>
  );
}

export default App;
