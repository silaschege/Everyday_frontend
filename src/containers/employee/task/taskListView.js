import React from "react";
import axios from "axios";
import EmployeeTask from "../../../components/employee/task/task";
import axiosInstance from "../../../components/connection";
import { EmployeeLayout } from "../../templates/employee/employeelayout";
import {Button} from "antd";
import { Link, withRouter } from 'react-router-dom';



class EmployeeTaskList extends React.Component {
  state = {
    tasks: []
  };

  fetchTask = () => {
    axiosInstance
    .get("/hr/Task/").then(res => {
      this.setState({
        tasks: res.data
      });
    });
  }

  componentDidMount() {
    this.fetchTask();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchTask();      
    }
  }

  render() {
    return (
      <div>
        <EmployeeLayout>
        <Button type="primary" htmlType="submit" onClick="location.href='/businesscreate'">
        <Link to="/employeetaskcreate">Create</Link>
        </Button>

        <EmployeeTask data={this.state.tasks} /> <br />
        </EmployeeLayout>
      </div>
    );
  }
}

export default EmployeeTaskList;
