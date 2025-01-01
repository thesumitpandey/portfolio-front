import React from 'react';
import './style.css';
import im from './output-onlinegiftools.gif';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Typewriter } from 'react-simple-typewriter';
import About from './About';
import Projects from './projects';
import Skill from './Skill';
import Contact from './contact';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { Suspense,lazy } from 'react';
import L from './Infinity@1x-1.0s-200px-200px.gif'
import { useState } from 'react';




export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false); 
  };
  return (
  
    

    <div className="Home">
      <Card className="card-container">
    
        <Card.Body className="card-body">
          <Card.Title
            className="animated-text2 ll"
            style={{ fontWeight: 'bolder', color: 'black' }}
          >
            <Typewriter
             words={["console.log(\"Hello, I'm Sumit\");"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={70}
              delaySpeed={2000}
            />
          </Card.Title>
          <Card.Text className="animated-text2">
            <div
              style={{
                fontWeight: 'bold',
                fontFamily: "'Roboto', sans-serif",
                color: 'black',
              }}
              className="ss"
            >
              Software Developer | Web Enthusiast | Lifelong Learner
            </div>
            <div style={{ paddingTop: '10px', textAlign: 'left', color: 'black' }}>
              Welcome to my portfolio! I'm passionate about crafting innovative
              solutions, building user-friendly websites, and delivering impactful digital experiences.
            </div>
          </Card.Text>
          <div>
          <li>
                   
                   <a href='https://linkedin.com/in/sumit-pandey-772b64256' target="_blank" rel="noopener noreferrer"  style={{textDecoration: 'underline',textDecorationColor:"black", border: '2px solid black', padding: '5px',marginRight:"5px", borderRadius:'50px'}}>
                     <span style={{color:"black"}}>  <FaLinkedin size={27} style={{ marginRight: '0px', color: 'black' }} />Sumit Pandey</span>
                   </a>

                   <a href='https://github.com/thesumitpandey' target="_blank" rel="noopener noreferrer"  style={{textDecoration: 'underline',textDecorationColor:"black", border: '2px solid black', padding: '5px', marginLeft:"5px", borderRadius:'50px'}}>
                     <span style={{color:"black"}}>  <FaGithub size={27} style={{ marginRight: '0px', color: 'black' }} />Sumit Pandey</span>
                   </a>
                 </li>



          </div>
      
        </Card.Body>

        <Card.Img
           src={isLoading ? L : im}
          alt="Card image"
          className="card-image rounded-image"
          onLoad={handleImageLoad}
        />
      </Card>
    
    </div>
   
  );
}
