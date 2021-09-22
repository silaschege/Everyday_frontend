import React, { Component } from 'react'
import { PreLoginHrLayout } from './preloginhrlayout'
import { Link, withRouter } from 'react-router-dom';
import {Button} from "antd";
import { Card } from "antd";
import businesshome from './businesshome.jpg';
import { Row, Col } from 'antd';


function HrManagerHomepage (){
    const handleClick = () => {
        window.open("/applicanthomepage");
      };

      const handleClick2 = () => {
        window.open("/employeehomepage");
      };
  
        return (
            <div>
        <PreLoginHrLayout>

        
        {/* <img src={businesshome}  height="20%"  width="100%"  alt="Image" /> */}
        
        <Row>
      <Col span={24}>
          <h1 align="center" >Everyday is a system that helps in hr management </h1>
            <p align="center">Our Modules</p>
      </Col>
      
    </Row>
    
    <Row>
      <Col span={8}>
          <h2>Applicant module</h2>
      <button onClick={handleClick}>Applicant</button>
      </Col>

      <Col span={8}>
      <h2>Business module</h2>
          
      <Link to="/hrlogin">Login</Link>   
      </Col>

      <Col span={8}>
      <h2>Employee module</h2>
      <button onClick={handleClick2}>Employee</button>
      </Col>
    </Row>
    
		
     

        </PreLoginHrLayout>
            </div>
        )
}
export default HrManagerHomepage;

