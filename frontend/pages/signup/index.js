import React from 'react'
import { Card } from 'primereact/card';
import Logo from '../../assets/Logo.png';
import Image from 'next/image';
import { Button } from 'primereact/button';

import { InputTextarea } from 'primereact/inputtextarea';
 // sorry misnamed this one this is actually login

 
const Signup = () => {
  return (
    <div className='signup-container'>
      <Image src={Logo} alt="logo" height={100} width={180}/>
      <div  className='signup-box' style={{justifyItems: 'center',alignItems:'center'}}>
        <InputTextarea className ="signup-input" rows={2} cols={40} value="Type in your Username" onChange=""/>
        <InputTextarea className ="signup-input" rows={2} cols={40} value="Type in your Username" onChange=""/>
        <Button class="signup-btn" label="Submit" rows={20} onClick=""/>
      </div>
      
    </div>
  )
}

export default Signup