import React, {useState} from 'react';
import Logo from '../../assets/Logo.png';
import Image from 'next/image';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/InputText';
import Link from 'next/link';


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // to be done by backend
  const handleSubmit =() =>{
    
  }
  return (
    <form className='login-container'>
      <Image src={Logo} alt="logo" height={150} width={230}/>
      <div  className='login-box'>
        <InputText className ="login-input" placeholder="Type in your Email" onChange={(e)=> setEmail(e.target.value)} required/>
        <InputText className ="login-input" placeholder="Password goes here" onChange={(e)=> setEmail(e.target.value)} required/>
        <Button class="login-btn" label="Submit" height={150} width={250} onClick={handleSubmit}/>
        <p>New User? Sign up <Link style={{color: "blue"}}href="/signup">here</Link></p>
   
      </div>
      </form>
  )
}

export default Login