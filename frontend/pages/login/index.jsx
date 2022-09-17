import React from 'react';
import Logo from '../../assets/Logo.png';
import Image from 'next/image';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';


const Login = () => {

  const handleSubmit =() =>{

  }
  return (
    <form className='login-container'>
      <Image src={Logo} alt="logo" height={150} width={230}/>
      <div  className='login-box' style={{justifyItems: 'center',alignItems:'center'}}>
        <InputTextarea className ="login-input" rows={1.5} cols={40} value="Type in your Email" onChange="" required/>
        <InputTextarea className ="login-input" rows={1.5} cols={40} value="Password goes here" onChange="" required/>
        <Button class="login-btn" label="Submit" height={200} width={350} onClick={handleSubmit}/>
   
      </div>
      </form>
  )
}

export default Login