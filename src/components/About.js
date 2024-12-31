import React from 'react';
import Card from 'react-bootstrap/Card';
import { Typewriter } from 'react-simple-typewriter';

export default function About() {
  return (
    <div className='about' style={{padding:"0px"}}>
      <Card className="ab" style={{padding:"0px"}}>
        <Card.Body style={{padding:"0px"}}>
          <Card.Title className='ab1'>
            <Typewriter
              words={["A Little About Myself"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </Card.Title>
          <Card.Text className='ab2' style={{padding:"0px", textAlign:'left'}}>
          Hello! I’m Sumit Pandey, a BTech student with a deep passion for technology and problem-solving. As an aspiring software developer, I’m focused on honing my skills in web development, AI/ML, and software engineering. I love taking on new challenges and learning from real-world applications.

Currently pursuing my BTech degree, I have gained valuable hands-on experience through various personal projects and academic work. My journey in the tech world has fueled my curiosity and desire to continuously learn, experiment, and push the boundaries of what technology can do.

In addition to coding, I am interested in exploring new frameworks, programming languages, and tools that help me build smarter, more efficient solutions. I am constantly working on personal projects to sharpen my skills and keep up with the latest trends in software development.
<br/>
Thank you for visiting my portfolio! Feel free to check out my projects, and let’s connect if you’re interested in collaborating or discussing opportunities.


          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
