import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import mo from './movie.png'
import wo from './wordwave.png'
import cr from './cryptoalert.png'
import Projectc from './projectc'
import noteContext from '../notestate/context';
import { useContext} from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { useNavigate } from 'react-router-dom';
import v from "./mvideo.mp4"



export default function More(props) {
    let navigate = useNavigate();
  
    const b=async()=>{
        navigate("/Projects")
        
              }
  return (
    <div className="container6 d-flex justify-content-center my-2">
      <Card style ={{ width: '60rem'}} className='more'>
      <Card.Img variant="top"    className="container d-flex justify-content-center my-2" src={mo} alt="holder.js/100px180"  style={{minHeight:'11rem'}}/>
      <Card.Body className="text-center" >
    
<Card.Text className="fs-8 text-center" style={{color:"black"}}>
  <h4>MovieSphere – a dynamic movie search platform that provides users with a seamless experience to discover and explore movies from around the world! 🌍🎥</h4>
</Card.Text>
<Card.Text className="fs-5 text-center" style={{color:"black"}}>
  <h3>🔍 Key Features:</h3>
  <ul className="l fs-5  mx-3" style={{ paddingLeft: '0', textAlign: 'left', color:"black" }}>
    <li>-Movie Search: Search for your favorite movies by title, year, actors, and more.</li>
    <li>-Movie Details: Get in-depth movie information including posters, plot, actors, directors, and more.</li>
    <li>-Pagination: Browse through multiple pages of movie results with intuitive navigation.</li>
    <li>-Responsive Design: Fully responsive layout that adapts to various screen sizes, ensuring an optimal experience on all devices.</li>
  </ul>
</Card.Text>
<Card.Text className="fs-5 text-center">
  <h3>📍 Tech Stack:</h3>
  <ul className="l fs-5  mx-3" style={{ paddingLeft: '0', textAlign: 'left' ,color:"black" , listStyleType: "square" ,color:"black"  }}>
    <li>-Frontend: React.js</li>
    <li>-Backend: OMDB API for fetching movie data</li>
    <li>-Backend: OMDB API for fetching movie data</li>
    <li>-React Router for seamless navigation between pages</li>
  </ul>
</Card.Text>
     <card className="Text">
     <h5>Here is a video demonstration of my website, showcasing its features and functionality. The website is not currently deployed as the API used for its operation is not free</h5>
        <video width="600" controls>
        <source src={v} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      </card>  
     
      <Button variant="primary" style={{ display: "block", margin: "20px auto" }} onClick={b} >Back</Button>
      </Card.Body>
    </Card>




    </div>
  )
}

