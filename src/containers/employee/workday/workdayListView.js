import React from "react";
import axios from "axios";
import Workday from "../../../components/hr_management/workday/workday";
import axiosInstance from "../../../components/connection";
import { HrLayout } from "../../templates/hr_manager/hrlayout";
import {Button} from "antd";
import { Link, withRouter } from 'react-router-dom';



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

        <Button type="primary" htmlType="submit" onClick="location.href='/businesscreate'">
        <Link to="/workdaycreate">Create</Link>
        </Button>

        <Workday data={this.state.workdays} /> <br />
        </HrLayout>
      </div>
    );
  }
}

export default WorkdayList;
