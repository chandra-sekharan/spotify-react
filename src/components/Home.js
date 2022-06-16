import React, { useState } from "react";
import './App.css';
import logo from './spotify.png'
import axios from 'axios';
import Player from "./Player";
import playicon from './play.png';


const Home = ({logouthandler,tokenn}) =>{
   const [search,setSearch] = useState('');
   const [Data,setData] = useState([]);
   const [uri , setUri] = useState('');
   const [image, setimg] = useState('');
   console.log(image)
   /************************Api call***********************/

  const searchhandler = async (e) =>{
    e.preventDefault();
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
       headers:{
        Authorization:`Bearer ${tokenn}`
       },
       params:{
        q:search,
        type:"track",
        market:"US",
        limit:13,
        offset:0
       }
    })
    setData(data.tracks.items)
 }
 console.log(Data)        
   
   return(
        <div className="home">
            <header>
            <img src={logo} alt="spotify"></img>
            <h1>Spotify</h1>
            <button onClick={logouthandler}>Logout</button>
            </header>
            <div className="main">
              <form onSubmit={searchhandler}>
                <input type="text" placeholder="Search song/artist.." value={search} onChange={(e)=>setSearch(e.target.value)}></input>
                <button>search</button>
              </form>
              
              
             {Data.map(song=>
              <div className="card">
              <h3>{song.name}</h3>
              <h4>{song.artists[0].name}</h4>
               <button onClick={(e)=>setUri(song.preview_url)} onClickCapture={(e)=>setimg(song.album.images[0].url)}><img src={playicon}  alt=""/></button>
            </div>
              )}
              <div className="empty"></div>
              <div className="bottom">
                <Player uri={uri} image={image} />
              </div>     
            </div>
            
        </div>
    );
}

export default Home;