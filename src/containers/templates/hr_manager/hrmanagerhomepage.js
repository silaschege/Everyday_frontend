import React, { Component } from 'react'
import { PreLoginHrLayout } from './preloginhrlayout'
import { Link, withRouter } from 'react-router-dom';
import {Button} from "antd";

function HrManagerHomepage (){
    const handleClick = () => {
        window.open("/");
      };
  
        return (
            <div>
        <PreLoginHrLayout>
                 This is the hr manager home page

                 <button onClick={handleClick}>Applicant</button>

        </PreLoginHrLayout>
            </div>
        )
}
export default HrManagerHomepage;

