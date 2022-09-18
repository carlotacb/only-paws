import React, {useState} from 'react'
import { Card } from 'primereact/card';
import Logo from '../../assets/Logo.png';
import Image from 'next/image';
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';

import { Checkbox } from 'primereact/checkbox';


import {InputText} from 'primereact/InputText';
 // sorry misnamed this one this is actually login


const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [petType, setPetType] = useState("");
  const [days, setDays] = useState([]);
  const [identity, setIdentity] = useState("");


  // to be done w backend
  // tick takes you to the profile of the individual
  // cross just presents another silde
  const handleSubmit = () => {

  }

  return (
    <form className='signup'>
    <div className='signup-logo'>
      <Image src={Logo} alt="logo" height={200} width={280}/>
    </div>
    <div className='signup-container'>
      <div className="signup-side">
        <div className="radio-container">
          <label className="radio-title">What type of user you want to be?</label>
          <div className="radio-btn">
            <RadioButton value='pet-owner' name="pet-owner"
                         onChange={(e) => setIdentity(e.target.value)} checked={identity === "pet-owner"}/>
            <label className="radio" htmlFor="pet-owner">Pet Owner</label>
            <RadioButton value="pet-sitter" name="pet-sitter"
                         onChange={(e) => setIdentity(e.target.value)} checked={identity === "pet-sitter"}/>
            <label className="radio" htmlFor="pet-sitter">Pet Sitter</label>
          </div>
        </div>
        <InputText className="login-input" type="email" placeholder="Type in your Email" onChange={(e)=> setEmail(e.target.value)} required/>
        <InputText className="login-input" type="password" placeholder="Type in your Password" onChange={(e)=> setPassword(e.target.value)} required/>
        <InputText className="login-input" placeholder="Type in your Username" onChange={(e)=> setUsername(e.target.value)} />
        {identity === 'pet-owner' ?
            <InputText className="login-input" placeholder="Pet type you have" onChange={(e) => setPetType(e.target.value)}/>
            :
            <InputText className="login-input" placeholder="Pet type you want to take care of" onChange={(e) => setPetType(e.target.value)}/>
        }
        {identity === 'pet-owner' ?
            <InputText className ="login-input" placeholder="Pet Name" onChange={(e)=> setPetType(e.target.value)}  />
            : null
        }
      </div>
      <div className='signup-side'>
          <div className="radio-container">
            {identity === 'pet-owner' ?
              <label className="radio-title" id='availability'>Check the days you need to have a petsitter</label> :
                <label className="radio-title" id='availability'>Check the days you have availability</label>
            }

            <div className="checkbox-div">
              <Checkbox className="checkbox" value="Monday" onChange={(e)=> setDays([...days,e.target.value])} checked={days.includes("Monday")} >Monday</Checkbox>
              <label htmlFor="Monday">Monday</label>
            </div>
            <div className="checkbox-div">
              <Checkbox className="checkbox" value="Tuesday" onChange={(e)=> setDays([...days,e.target.value])}>Tuesday</Checkbox>
              <label  htmlFor="Tuesday">Tuesday</label>
            </div>
            <div className="checkbox-div">
              <Checkbox className="checkbox" value="Wednesday" onChange={(e)=> setDays([...days,e.target.value])}>Wednesday</Checkbox>
              <label htmlFor="Wednesday">Wednesday</label>
            </div>
            <div className="checkbox-div">
              <Checkbox className="checkbox" value="Thursday" onChange={(e)=> setDays([...days,e.target.value])}>Thursday</Checkbox>
              <label htmlFor="Thursday">Thursday</label>
            </div>
            <div className="checkbox-div">
              <Checkbox className="checkbox" value="Friday" onChange={(e)=> setDays([...days,e.target.value])}>Friday</Checkbox>
              <label htmlFor="Friday">Friday</label>
            </div>
            <div className="checkbox-div">
              <Checkbox className="checkbox" value="Saturday" onChange={(e)=> setDays([...days,e.target.value])}>Saturday</Checkbox>
              <label htmlFor="Saturday">Saturday</label>
            </div>
            <div className="checkbox-div">
              <Checkbox className="checkbox" value="Sunday" onChange={(e)=> setDays([...days,e.target.value])}>Sunday</Checkbox>
              <label htmlFor="Sunday">Sunday</label>
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
