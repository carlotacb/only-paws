import React from 'react';
import Logo from '../../assets/Logo.png';
import Image from 'next/image';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';


const Login = () => {
  return (
    <div className='login-container'>
      <Image src={Logo} alt="logo" height={100} width={180}/>
      <div  className='login-box' style={{justifyItems: 'center',alignItems:'center'}}>
        <InputTextarea className ="login-input" rows={2} cols={40} value="Type in your Username" onChange=""/>
        <InputTextarea className ="login-input" rows={2} cols={40} value="Type in your Username" onChange=""/>
        <Button class="login-btn" label="Submit"  onClick=""/>
      </div>
      </div>
  )
}

export default Login