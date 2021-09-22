import React, { Component } from 'react'
import { PreLoginEmployeeLayout } from './preloginemployeelayout';
import { Link, withRouter } from 'react-router-dom';
import {Button} from "antd";
import { Row, Col } from 'antd';

function EmployeeHomepage (){
    const handleClick = () => {
        window.open("/");
      };
  
      const handleClick2 = () => {
        window.open("/apllicanthomepage");
      };

        return (
            <div>
        <PreLoginEmployeeLayout>
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
      <h2>Employee module</h2>
          
      <Link to="/employeelogin">Login</Link>   
      </Col>

      <Col span={8}>
      <h2>Business module</h2>
      <button onClick={handleClick2}>Business</button>
      </Col>
    </Row>
        </PreLoginEmployeeLayout>
            </div>
        )
}
export default EmployeeHomepage;

