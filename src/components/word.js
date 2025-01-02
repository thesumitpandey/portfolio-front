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


 
export default function More(props) {
    let navigate = useNavigate();
    const {s} = useContext(noteContext);
    const b=async()=>{
        navigate("/Projects")
        
              }
  return (
    <div className="container d-flex justify-content-center my-2">
      <Card style ={{ width: '60rem'}} className='more'>
      <Card.Img variant="top"    className="container d-flex justify-content-center my-2" src='https://cdn.jsdelivr.net/gh/thesumitpandey/mygif@08a0741b0bef928a555afe987f354149bbe618dc/wordwave.png' alt="holder.js/100px180"  style={{minHeight:'11rem'}}/>
      <Card.Body className="text-center" >
    
<Card.Text className="fs-8 text-center" style={{color:"black"}}>
  <h4>WordWave-a web-based cloud application designed to empower users to securely create, update, delete, and organize their blogs.</h4>
</Card.Text>
<Card.Text className="fs-5 text-center">
  <h3>🔍 Key Features:</h3>
  <ul className="l fs-5 list-unstyled mx-3" style={{ paddingLeft: '0', textAlign: 'left', color:"black" }}>
    <li>-User Authentication: Secure login and personalized access.</li>
    <li>-Blog Management: Easily add, update, and delete blogs.</li>
    <li>-Search Functionality: Quickly find and manage your blogs.</li>
    <li>-Cloud Storage with MongoDB: All your blogs are stored securely in the cloud, accessible from anywhere.</li>
  </ul>
</Card.Text>
<Card.Text className="fs-5 text-center">
  <h3>📍 Tech Stack:</h3>
  <ul className="l fs-5 list-unstyled mx-3" style={{ paddingLeft: '0', textAlign: 'left', color:"black" }}>
    <li>-Frontend: React.js – For building interactive and responsive user interfaces</li>
    <li>-Backend: Express.js, Node.js – Express.js for web server functionality, and Node.js for a scalable server-side JavaScript runtime.</li>
    <li>-Database: MongoDB – NoSQL database for flexible and scalable cloud storage.</li>
    <li>-Authentication: JWT (JSON Web Tokens) – Secure user authentication and session management.</li>
    <li>-Version Control: Git, GitHub – For efficient collaboration and version control.</li>
  </ul>
</Card.Text>
<Card.Text className="fs-8 text-center">
<h4>Check out my project here:<a href="https://lnkd.in/dekaK2fi" target="_blank" rel="noopener noreferrer">WordWave</a></h4>
</Card.Text>
      
        <Button variant="primary" onClick={b}>Back</Button>
      </Card.Body>
    </Card>


    </div>
  )
}

