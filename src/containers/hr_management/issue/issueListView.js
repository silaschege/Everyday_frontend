import React from "react";
import axios from "axios";
import Issue from  "../../../components/hr_management/issue/issue";
import axiosInstance from "../../../components/connection";
import { HrLayout } from "../../templates/hr_manager/hrlayout";



class IssueList extends React.Component {
  state = {
    issues: []
  };

  fetchIssue = () => {
    axiosInstance
    .get("/hr/Issue/").then(res => {
      this.setState({
        issues: res.data
      });
    });
  }

  componentDidMount() {
    this.fetchIssue();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchIssue();      
    }
  }

  render() {
    return (
      <div>
        <HrLayout>
        <Issue data={this.state.issues} /> <br />
        </HrLayout>
      </div>
    );
  }
}

export default IssueList;
