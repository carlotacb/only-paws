import React, {useState} from 'react'
import { Card } from 'primereact/card';
import Logo from '../../assets/Logo.png';
import Image from 'next/image';
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';

import { Checkbox } from 'primereact/checkbox';
 

import { InputTextarea } from 'primereact/inputtextarea';
 // sorry misnamed this one this is actually login


const Signup = () => {
  return (
    <form className='signup-container'>
      <div className="left">
        <div  className='login-box' style={{justifyItems: 'center',alignItems:'center'}}>
          <Image src={Logo} alt="logo" height={160} width={200}/>
          
          <InputTextarea className ="login-input" rows={2} cols={40} value="Type in your Username" onChange="" required/>
          <InputTextarea className ="login-input" rows={2} cols={40} value="Type in your Username" onChange="" required/>
          <div className ="radio-btn">
            <RadioButton value='Pet Owner' name="Pet Owner" onChange={(e) => ""} />
            <RadioButton value="Pet Sitter" name="Pet Sitter" onChange={(e) => ""}  />
          </div>
          
          <InputTextarea className ="login-input" rows={2} cols={40} value="Type in your Username" onChange=""/>
          <InputTextarea className ="login-input" rows={2} cols={40} value="Pet Type" onChange="" />
        </div>
      </div>
      <div className='right'>
        <div  className='login-box' style={{justifyItems: 'center',alignItems:'center'}}>
            <Image src={Logo} alt="logo" height={160} width={200}/>
            <InputTextarea className ="login-input" rows={2} cols={40} value="Type in your Email" onChange=""/>
            <div className="checkbox">
              <Checkbox value="Monday" onChange={e => ""}>Monday</Checkbox>
              <Checkbox value="Tuesday" onChange={e => ""}>Tuesday</Checkbox>
              <Checkbox value="Wednesday" onChange={e => ""}>Wednesday</Checkbox>
              <Checkbox value="Thursday" onChange={e => ""}>Thursday</Checkbox>
              <Checkbox value="Friday" onChange={e => ""}>Friday</Checkbox>
              <Checkbox value="Saturday" onChange={e => ""}>Saturday</Checkbox>
              <Checkbox value="Sunday" onChange={e => ""}>Sunday</Checkbox>
            </div>
            <Button className="login-btn" onClick="">Submit</Button>
            </div>
      </div>
    </form>
  )
}

export default Signup