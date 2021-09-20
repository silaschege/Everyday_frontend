import React from "react";
import axios from "axios";
import Workday from "../../../components/hr_management/workday/workday";
import axiosInstance from "../../../components/connection";
import { HrLayout } from "../../templates/hr_manager/hrlayout";



class WorkdayList extends React.Component {
  state = {
    workdays: []
  };

  fetchWorkday = () => {
    axiosInstance
    .get("hr/Work_day/").then(res => {
      this.setState({
        workdays: res.data
      });
    });
  }

  componentDidMount() {
    this.fetchWorkday();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchWorkday();      
    }
  }

  render() {
    return (
      <div>
        <HrLayout>
        <Workday data={this.state.workdays} /> <br />
        </HrLayout>
      </div>
    );
  }
}

export default WorkdayList;
