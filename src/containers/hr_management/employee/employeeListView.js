import React from "react";
import axios from "axios";
import Employee from "../../../components/hr_management/employee/employee";
import axiosInstance from "../../../components/connection";
import { HrLayout } from "../../templates/hr_manager/hrlayout";
import {Button} from "antd";
import { Link, withRouter } from 'react-router-dom';



class EmployeeList extends React.Component {
  state = {
    employees: []
  };

  fetchEmployee = () => {
    axiosInstance
    .get("hr/Employee/").then(res => {
      this.setState({
        employees: res.data
      });
    });
  }

  componentDidMount() {
    this.fetchEmployee();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchEmployee();      
    }
  }

  render() {
    return (
      <div>
        <HrLayout>

        <Button type="primary" htmlType="submit" onClick="location.href='/businesscreate'">
        <Link to="/employeecreate">Create</Link>
        </Button>

        <Employee data={this.state.employees} /> <br />
        </HrLayout>
      </div>
    );
  }
}

export default EmployeeList;
