import React from "react";
import axios from "axios";
import Employee from "../../../components/hr_management/employee/employee";
import axiosInstance from "../../../components/connection";
import { HrLayout } from "../../templates/hr_manager/hrlayout";



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
        <Employee data={this.state.employees} /> <br />
        </HrLayout>
      </div>
    );
  }
}

export default EmployeeList;
