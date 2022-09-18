import React, {useState} from 'react'
import { Card } from 'primereact/card';
import Logo from '../../assets/Logo.png';
import Image from 'next/image';
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';

import { Checkbox } from 'primereact/checkbox';
 

import { InputText} from 'primereact/InputText';
 // sorry misnamed this one this is actually login


const Signup = () => {
  return (
    <form> 
    <div className='signup-logo'>
      <Image src={Logo} alt="logo" height={220} width={260}/>
    </div>
    <div className='signup-container'>
      <div className="left">
        <div id='column1' className='login-box' style={{justifyItems: 'center',alignItems:'center'}}>          
          <InputText className ="login-input" placeholder="Type in your Username" onChange="" required/>
          <InputText className ="login-input" placeholder="Type in your Username" onChange="" required/>
          <div className ="radio-btn">
            <label className="radio" htmlFor="pet-owner">Pet Owner</label>
            <RadioButton className="radio" value='pet-owner' name="Pet Owner" onChange={(e) => ""}/>
            <label className="radio" htmlFor="pet-sitter">Pet Sitter</label>
            <RadioButton className="radio" value="pet-sitter" name="Pet Sitter" onChange={(e) => ""}  />
          </div>          
          <InputText className ="login-input" placeholder="Type in your Username" onChange=""/>
          <InputText className ="login-input" placeholder="Pet Type" onChange="" />
          <InputText className ="login-input"placeholder="Type in your Email" onChange=""/>
        </div>
      </div>
      <div className='right'>
        <div  className='login-box' style={{justifyItems: 'center',alignItems:'center'}}>
            <div>
              <div className="checkbox-div">           
                <Checkbox className="checkbox" value="Monday" onChange={e => ""}>Monday</Checkbox>       
                <label htmlFor="Monday">Monday</label>
              </div>
              <div className="checkbox-div"> 
                <Checkbox className="checkbox" value="Tuesday" onChange={e => ""}>Tuesday</Checkbox>
                <label  htmlFor="Tuesday">Tuesday</label>
              </div>
              <div className="checkbox-div"> 
                <Checkbox className="checkbox" value="Wednesday" onChange={e => ""}>Wednesday</Checkbox>
                <label htmlFor="Wednesday">Wednesday</label>
              </div>              
              <div className="checkbox-div"> 
                <Checkbox className="checkbox" value="Thursday" onChange={e => ""}>Thursday</Checkbox>
                <label htmlFor="Thursday">Thursday</label>
              </div>
              <div className="checkbox-div"> 
                <Checkbox className="checkbox" value="Friday" onChange={e => ""}>Friday</Checkbox>
                <label htmlFor="Friday">Friday</label>
              </div>
              <div className="checkbox-div"> 
                <Checkbox className="checkbox" value="Saturday" onChange={e => ""}>Saturday</Checkbox>
                <label htmlFor="Saturday">Saturday</label>
              </div>
              <div className="checkbox-div"> 
                <Checkbox className="checkbox" value="Sunday" onChange={e => ""}>Sunday</Checkbox>
                <label htmlFor="Sunday">Sunday</label>
              </div>
            </div>
            </div>
        </div>

    </div>      
    <div className='button-container'>
        <Button className="login-btn" onClick="">Submit</Button>
    </div>
    </form>
     
  )
}

export default Signup