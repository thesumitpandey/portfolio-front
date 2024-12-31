import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import mo from './movie.png';
import wo from './wordwave.png';
import cr from './cryptoalert.png';
import Projectc from './projectc';
import noteContext from '../notestate/context';
import { useContext } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { useNavigate } from 'react-router-dom';

export default function Projects() {
  const { mov, wor, cry, sets, movl, worl, cryl } = useContext(noteContext);
  let navigate = useNavigate();

  const r = async () => {
    navigate("/more");
  };
  const q = async () => {
    navigate("/word");
  };
  const y = async () => {
    navigate("/crypto");
  };

  return (
    <div className="pro" >
      <div className="head" style={{margin:"1rem" ,color:"black"}}>
        <Typewriter
          words={["Recent Projects"]}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </div>

 
      <div className="projects-container">
        <Projectc i={mo} c={mov} title='MovieSphere' r={r} l={movl} />
        <Projectc i={wo} c={wor} title='WordWave' r={q} l={worl} />
        <Projectc i={cr} c={cry} title='CryptoAlert!' l={cryl} r={y} />
      </div>
    </div>
  );
}
