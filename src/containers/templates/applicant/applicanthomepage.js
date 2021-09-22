import React, { Component } from 'react'
import { PreLoginApplicantLayout } from './preloginapplicantlayout';
import { Link, withRouter } from 'react-router-dom';
import {Button} from "antd";
import { Row, Col } from 'antd';

function ApplicantHomepage (){
    const handleClick = () => {
        window.open("/");
      };


      const handleClick2 = () => {
        window.open("/employeehomepage");
      };
  
        return (
            <div>
    <PreLoginApplicantLayout>
    <Row>
      <Col span={24}>
          <h1 align="center" >Everyday is a system that helps in hr management </h1>
            <p align="center">Our Modules</p>
      </Col>
      
    </Row>
    
    <Row>
      <Col span={8}>
          <h2>Business module</h2>
      <button onClick={handleClick}>Business</button>
      </Col>

      <Col span={8}>
      <h2>Applicant module</h2>
          
      <Link to="/applicantlogin">Login</Link>   
      </Col>

      <Col span={8}>
      <h2>Employee module</h2>
      <button onClick={handleClick2}>Employee</button>
      </Col>
    </Row>

        </PreLoginApplicantLayout>
            </div>
        )
}
export default ApplicantHomepage;

