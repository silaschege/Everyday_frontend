import React from "react";
import axios from "axios";
import Task from "../../../components/hr_management/task/task";
import axiosInstance from "../../../components/connection";
import { HrLayout } from "../../templates/hr_manager/hrlayout";



class TaskList extends React.Component {
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
        <HrLayout>
        <Task data={this.state.tasks} /> <br />
        </HrLayout>
      </div>
    );
  }
}

export default TaskList;
