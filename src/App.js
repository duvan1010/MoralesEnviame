import './App.css';
import axios from 'axios'
import { useState, useEffect} from 'react'
import moment from 'moment';
moment.locale('es');

function App() {

  const [heroes, setHeroes] = useState([])


  useEffect (() => {
    axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=f467e0e1f0ae3d2e60815142ab68ef95&hash=0671925a8a301714539ae8eaa72ea3bf').then(respuest=>{

      setHeroes(respuest.data.data.results)   

    })
       
  }, [])
  

  return (
    
    <div className="App">
      <h1 className="card-title">Marvel Enviame</h1> 

      {/* <div class="container"> */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g4"> 

          {heroes.map( heroe =>(
            <div className="col mt-3" key={heroe.id}>              
              <div className="card" style={{width: "18rem", height:"18rem" }}> 
                <img src={`${heroe.thumbnail.path}.${heroe.thumbnail.extension}`} className="card-img-top" style={{width:"100%" , height:"70%", padding:"10px"}} />
                  <div className="card-body scroll" >

                    <p className="card-text">
                      <b>Héroe:</b> {heroe.name} <br/>
                      <b>Descripcion:</b> {heroe.description}<br/>
                      <b>Url:</b>{heroe.thumbnail.path}<br/>
                      <b>Extension:</b> {heroe.thumbnail.extension}<br/>
                      <b>Fecha:</b> {moment(heroe.modified).format('YYYY-MM-DD')}<br/>
                      
                    </p>
                 

                  </div>
              </div>
            </div>   
          ))}           

        </div>
      {/* </div> */}
    
    </div>

  
     
  );
}

export default App;



