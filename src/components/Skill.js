import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faCloud, faCogs,faCalculator, faFileAlt, faTools } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
export default function Skill() {
  return (
    <div style={{ color: 'black' }} className='sk'  >
      <div
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: 'black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

        }}
      >
        <Typewriter
    
          words={['Skillset Overview']}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={100}
          delaySpeed={2000}
        />
      </div>

      <div>

      <ul className="animated-list  back">
        <li>
        <div><FontAwesomeIcon icon={faCode} style={{ marginRight: '10px', color: '#ffcc00' }} />
          Programming Languages: C++, Java, JavaScript (React.js, Node.js)  </div>
          
        </li>
      
        <li>
          <div>
          <FontAwesomeIcon icon={faCode} style={{ marginRight: '10px', color: '#00b0ff' }} />Web Development: HTML5, CSS3, JavaScript, React.js, Bootstrap, Express.js

          </div>
        </li>
        <li>

          <div>
          <FontAwesomeIcon icon={faDatabase} style={{ marginRight: '10px', color: '#28a745' }} />
          Database Management: MongoDB, GridFS, SQL

          </div>
       </li>
        <li>
          <div>

          <FontAwesomeIcon icon={faCloud} style={{ marginRight: '10px', color: '#ff5722' }} />Cloud Computing: Basic knowledge of cloud platforms and services
          </div>
       </li>
        <li>
<div>
<FontAwesomeIcon icon={faCogs} style={{ marginRight: '10px', color: '#9e9e9e' }} />Backend Development: API development, authentication (JWT, OAuth), server management

  
</div>

       
          <div>
          <FontAwesomeIcon icon={faGithub}  style={{ marginRight: '10px', color: '#ff5722' }} />Version Control: Git, GitHub

          </div>
        </li>
        <li>
<div>

<FontAwesomeIcon icon={faCalculator} style={{ marginRight: '10px', color: '#3f51b5' }} />Mathematics & Theoretical Concepts: Set Theory, Equivalence Classes, Hasse Diagrams

</div>
</li>

        <li>
          <div>
          <FontAwesomeIcon icon={faFileAlt} style={{ marginRight: '10px', color: '#8bc34a' }} />Testing & Quality Assurance: Software testing, QA best practices, bug tracking
          </div>
</li>
        <li> 
          <div>

          <FontAwesomeIcon icon={faTools} style={{ marginRight: '10px', color: '#f57c00' }} />Tools & Libraries: Multer (file upload), MongoDB GridFS, React-Bootstrap

          </div>
</li>
      </ul>
    </div>
    </div>
  );
}
