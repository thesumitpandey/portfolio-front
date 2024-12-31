import { useContext, useState } from 'react';
import Notecontext from './context';



const NoteState = (props) => {
  const host = "https://portfolio-backend-3-9dn8.onrender.com";
  const headers = {
    'Content-Type': 'application/json',
  };

  const[mov,setmo]=useState('MovieSphere-a dynamic movie search platform that provides users with a seamless experience to discover and explore movies from around the world!');
  const[wor,setwo]=useState('WordWave-a web-based cloud application designed to empower users to securely create, update, delete, and organize their blogs. ');
  const[cry,setcr]=useState('CryptoAlert-a React.js app delivering real-time updates on top cryptocurrencies like Bitcoin, Ethereum, and more.');
 
  const[s,sets]=useState()

  const[movl,setmovl]=useState("https://github.com/thesumitpandey/moviephere.git")
  const[worl,setworl]=useState("https://github.com/thesumitpandey/wordwave.git")
  const[cryl,setcryl]=useState("https://github.com/thesumitpandey/cryptoAlert.git")



  const add = async ({name,email,message}) => {

  
    const response=await fetch(`${host}/message`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({name,message,email})
    });
  
    const json = await response.json();
   
    return json;
  
  }




  return (
    <Notecontext.Provider value={{mov,wor,cry,s,sets,movl,worl,cryl,add}}>
      {props.children}
    </Notecontext.Provider>
  );
};

export default NoteState;
