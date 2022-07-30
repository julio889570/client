import React, { useState } from 'react';
import './style.css';
import Cards from './Cards';
import axios from 'axios';


export default function Main() {

const [search, setSearch] = useState("");
const [bookData, setBookData] = useState([])


const searchBook =(event) =>{
  if (event.key === "Enter"){
    axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'s&key=AIzaSyBxab965dZkV2hBSJly_DHyu1J_5W27-F4'+'&maxResults=40')
    .then(res=>setBookData(res.data.items))
    .catch(err=>console.log(err))
  }
}


  return (
    <>
    <div className='header'>
      <div className='row1'>
            <h1>A room without books is like<br/>  a body without a soul.</h1>
      </div>
      <div className='row2'>
      <h2>Find your Book</h2>
      <div className='search'>
         <input type='text'
          placeholder='Enter your Book Name'
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          onKeyPress={searchBook}
          
          />
         <button><i className="fa-solid fa-file-magnifying-glass" ></i>Search</button>
      </div>
      <img src="./images/bg2.png" alt='' />
      </div>    
    </div>
    <div className='container'> 
    
    <Cards book={bookData}/>
    
    </div>
    </>
  )
}
