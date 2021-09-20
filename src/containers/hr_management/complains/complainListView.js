import React from "react";
import axios from "axios";
import Complain from "../../../components/hr_management/complain/complain";
import axiosInstance from "../../../components/connection";
import { HrLayout } from "../../templates/hr_manager/hrlayout";



class ComplainList extends React.Component {
  state = {
    complains: []
  };

  fetchComplain = () => {
    axiosInstance
    .get("hr/Complain/").then(res => {
      this.setState({
        complains: res.data
      });
    });
  }

  componentDidMount() {
    this.fetchComplain();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchComplain();      
    }
  }

  render() {
    return (
      <div>
        <HrLayout>
        <Complain data={this.state.complains} /> <br />
        </HrLayout>
      </div>
    );
  }
}

export default ComplainList;
