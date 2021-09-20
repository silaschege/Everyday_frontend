import React, { Component } from 'react'
import { PreLoginApplicantLayout } from './preloginapplicantlayout';
import { Link, withRouter } from 'react-router-dom';
import {Button} from "antd";

function ApplicantHomepage (){
    const handleClick = () => {
        window.open("/hrhomepage");
      };
  
        return (
            <div>
        <PreLoginApplicantLayout>
                 This is the home page

                 <button onClick={handleClick}>Business</button>

        </PreLoginApplicantLayout>
            </div>
        )
}
export default ApplicantHomepage;

