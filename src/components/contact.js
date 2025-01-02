import React, { useState, useContext } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import './style.css';
import Spinner from 'react-bootstrap/Spinner';
import noteContext from '../notestate/context';
import 'react-toastify/dist/ReactToastify.css';
import Card from 'react-bootstrap/Card';

export default function Contact(props) {
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState({ email: "", name: "", message: "" });
  const { add } = useContext(noteContext);

  const handle = async (e) => {
    props.showToast('Please wait, we are processing and sending your message.');
    props.set(20);
    e.preventDefault(); 
    if (!note.name || !note.email || !note.message) {
      alert('Please fill in all fields!');
      return;
    }

    setLoading(true);

    const success = await add(note);
    if (success) {
      setNote({ email: "", name: "", message: "" });
      props.set(100);
      props.showToast('Message sent successfully!');
      setLoading(false);
    } else {
      props.set(100);
      props.showToast('Message sent successfully!');
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="con">
      <div>
       
        <div  className='hh' style={{color:"black"}}>
        Let's make something together that someone desires

        </div>
          
      </div>

      <div className="em" style={{color:"black"}}>
        <ul>
          <li>
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px', color: 'black' }} />
            <span><a href="mailto:sumit1234coc@gmail.com"  style={{textDecoration: 'underline', color:"black", textDecorationColor:"white"}}>sumit1234coc@gmail.com</a></span>
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px',color: 'black' }} />
            <span>+91 9328481572</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '10px', color: 'black' }} />
            <a href='https://linkedin.com/in/sumit-pandey-772b64256' target="_blank" rel="noopener noreferrer"  style={{textDecoration: 'underline'}}>
              <span style={{color:"black"}}>Sumit Pandey</span>
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faGithub} style={{ marginRight: '10px', color: 'black' }}  />
            <a href='https://github.com/thesumitpandey' target="_blank" rel="noopener noreferrer" style={{textDecoration: 'underline'}}>
              <span style={{color:"black"}}>GitHub</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="form">
        <Form onSubmit={handle} >
          <Form.Group controlId="formName">
            <Form.Label style={{color:"black"}}>Name</Form.Label>
            <Form.Control size="sm" type="text" name="name" onChange={handleChange} value={note.name} placeholder="Enter your name" required />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label style={{color:"black"}}>Email address</Form.Label>
            <Form.Control type="email" name="email" onChange={handleChange} value={note.email} placeholder="Enter your email" required />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label style={{color:"black"}}>Your Message</Form.Label>
            <Form.Control as="textarea" rows={3} name="message" onChange={handleChange} value={note.message} placeholder="Write your message" required />
          </Form.Group>

          <Button variant="dark" type="submit" className="bb" style={{ display: "block", margin: "20px auto" }} disabled={loading}>
            {loading ? (
              <>
                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> Loading...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </Form>
      </div>
    </div>
  );
}
