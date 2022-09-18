import React from 'react';
import Logo from '../../assets/Logo.png';
import Image from 'next/image';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/InputText';


const Login = () => {

  const handleSubmit =() =>{

  }
  return (
    <form className='login-container'>
      <Image src={Logo} alt="logo" height={150} width={230}/>
      <div  className='login-box'>
        <InputText className ="login-input" placeholder="Type in your Email" onChange="" required/>
        <InputText className ="login-input" placeholder="Password goes here" onChange="" required/>
        <Button class="login-btn" label="Submit" height={150} width={250} onClick={handleSubmit}/>
   
      </div>
      </form>
  )
}

export default Login