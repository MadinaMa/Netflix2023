import React from 'react';
import { useState } from 'react';
import { data } from './Data';
import './App.css';


function App() {

  const [series, setSeries ] = useState(data);
  const [showText, setShowText] = useState(false);

  

  const removeSerie = (id) => {
    let newSeries = series.filter((serie) => serie.id !==id);
    setSeries(newSeries)
  }

  const showTextClick = (item) => {
    item.showMore = !item.showMore
    setShowText(!showText)
  }

  
  return ( <div>
    <div className='container'>
        <h1> Netflix top { series.length }  series 2023 </h1>
    </div>

    {series.map((item => {
         const {id, image, serieName, genre, description, showMore} = item; 

         return ( <div key = { id } >
         <div className='container'>
             <img src={image} width='300px' alt='pic'/>
                        </div>

           <div className ='container'>
               <h2> {id} . {serieName} </h2>
             </div>
             
             <div className='container'>
               <h3> {genre} </h3>
             </div>

             <div className='container'>
              <p> {showMore ? description : description.substring(0,80) + "...."} 
              <button onClick={() => showTextClick(item)}> {showMore ? "Show less" : "Show more"} </button></p>
            </div>

          <div className='container'>
                  <button className='btn' onClick={() => removeSerie(id)}> Remove </button>
                  
          </div>
          <div className='line'>
          <h4> </h4>
          </div>
        
        
      
          </div>
         )
    }))}
    <div className='container'>
          <button className='delete' onClick={() => setSeries([])}> Delete all </button>
        </div>

        <div className='container'>
          <h5> Madina©2023</h5>
        </div>
    </div>
  );
}

export default App;

