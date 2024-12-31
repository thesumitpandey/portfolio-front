import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import mo from './movie.png'
import './style.css'
import { useNavigate } from 'react-router-dom';

export default function Projects(props) {
  return (
    <div>
     <Card style ={{ width: '20rem',Height:'30rem'}} className='cc'>
      <Card.Img variant="top"  src={props.i} alt="holder.js/100px180"  style={{minHeight:'11rem'}}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        {props.c} 
        </Card.Text>
        <div>
        <Button variant="primary" className="card-btn-left mx-2" onClick={() => props.r()}>
        More
        </Button>
        <a href={props.l} target="_blank" rel="noopener noreferrer  "  >
  <Button variant="primary" className="card-btn-left" style={{textDecoration: 'underline'  ,textDecorationColor: 'white'}}>
    GitHub
  </Button>
</a>

        </div>
    
      </Card.Body>
    </Card>
    </div>
  )
}
