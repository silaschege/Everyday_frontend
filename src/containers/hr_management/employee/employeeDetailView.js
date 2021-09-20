import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Card } from "antd";
import { HrLayout } from "../../templates/hr_manager/hrlayout";
import axiosInstance from "../../../components/connection";




class EmployeeDetail extends React.Component {
  state = {
    employee: {}
  };


 
  componentDidMount(){
    const employeeID = this.props.match.params.employeeID;
    axiosInstance
    .get(`/hr/Employee/${employeeID}/`).then(res => {
      this.setState({
        employee: res.data
      });
    });
  }

  



  render() {
    return (
      <div>
        <HrLayout>
        <Card title={this.state.employee.First_name }>
          <p>Last_name:{this.state.employee.Last_name} </p>
          <p> Other_Names :{this.state.employee.Other_Names} </p>
          <p> Employee :{this.state.employee.Employee} </p>
          <p> Company_Position :{this.state.employee.Company_Position } </p>
        </Card>
        </HrLayout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default EmployeeDetail;
