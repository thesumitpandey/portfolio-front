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
      <Card.Img variant="top"    className="container d-flex justify-content-center my-2" src='https://cdn.jsdelivr.net/gh/thesumitpandey/mygif@08a0741b0bef928a555afe987f354149bbe618dc/cryptoalert.png' alt="holder.js/100px180"  style={{minHeight:'11rem'}}/>
      <Card.Body className="text-center" >
    
<Card.Text className="fs-8 text-center" style={{color:"black"}}>
  <h4>CryptoAlert-a React.js app delivering real-time updates on top cryptocurrencies like Bitcoin, Ethereum, and more.</h4>
</Card.Text>
<Card.Text className="fs-5 text-center">
  <h3>🔍 Key Features:</h3>
  <ul className="l fs-5 list-unstyled mx-3" style={{ paddingLeft: '0', textAlign: 'left', color:"black" }}>
    <li>-Real-time Cryptocurrency Updates: Get live updates on top cryptocurrencies like Bitcoin, Ethereum, and more.</li>
    <li>-Comprehensive Market Data: Access detailed data on market cap, volume, supply, and more for each cryptocurrency.</li>
    <li>-User-friendly Interface: Simple, intuitive UI for easy navigation and quick access to important information.</li>
    <li>-Responsive Design: Fully responsive, ensuring a smooth experience across all devices.</li>
  </ul>
</Card.Text>
<Card.Text className="fs-5 text-center">
  <h3>📍 Tech Stack:</h3>
  <ul className="l fs-5 list-unstyled mx-3" style={{ paddingLeft: '0', textAlign: 'left', color:"black" }}>
    <li>-Frontend: React.js – For building interactive and responsive user interfaces</li>
    <li>-Styling: CSS, Bootstrap – For responsive and clean UI design.</li>
    <li>-Version Control: Git, GitHub – For source code management and collaboration.</li>
    <li>-Hosting: GitHub Pages – For deploying and hosting the app.</li>
    <li>-Data Updates: Manual Data Management – Since the API is not free, data is updated manually.</li>
  </ul>
</Card.Text>
<Card.Text className="fs-8 text-center">
<h4>Check out my project here:<a href="https://lnkd.in/dbXvKXc5" target="_blank" rel="noopener noreferrer"> CryptoAlert!</a></h4>
</Card.Text>
      
        <Button variant="primary" onClick={b}>Back</Button>
      </Card.Body>
    </Card>




    </div>
  )
}

