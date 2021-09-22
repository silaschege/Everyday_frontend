import React, { Component } from 'react'
import { PreLoginHrLayout } from './preloginhrlayout'
import { Link, withRouter } from 'react-router-dom';
import {Button} from "antd";
import { Card } from "antd";
import businesshome from './businesshome.jpg';


function HrManagerHomepage (){
    const handleClick = () => {
        window.open("/applicanthomepage");
      };
  
        return (
            <div>
        <PreLoginHrLayout>

        
        <img src={businesshome}  height="20%"  width="100%"  alt="Image" />
        

                 <button onClick={handleClick}>Applicant</button>

        </PreLoginHrLayout>
            </div>
        )
}
export default HrManagerHomepage;

