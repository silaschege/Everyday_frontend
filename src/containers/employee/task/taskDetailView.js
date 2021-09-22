import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Card } from "antd";
import { EmployeeLayout } from "../../templates/employee/employeelayout";
import axiosInstance from "../../../components/connection";
import TaskUpdateForm  from "../../../components/hr_management/task/taskUpdateForm";
import TaskDeleteForm  from "../../../components/hr_management/task/taskDeleteForm";




class EmployeeTaskDetail extends React.Component {
  state = {
    task: {}
  };


 
  componentDidMount(){
    const taskID = this.props.match.params.taskID;
    axiosInstance
    .get(`/hr/Task/${taskID}/`).then(res => {
      this.setState({
        task: res.data
      });
    });
  }

  



  render() {
    return (
      <div>
        <EmployeeLayout>
        <Card title={this.state.task.Task }>
          <p>Task:{this.state.task.Task} </p>
          <p> Date  :{this.state.task.Date} </p>
          <p> Employee :{this.state.task.Employee} </p>
          <p> State :{this.state.task.State} </p>
        </Card>

        <TaskUpdateForm/>
        <TaskDeleteForm/>
        
        </EmployeeLayout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default EmployeeTaskDetail;
