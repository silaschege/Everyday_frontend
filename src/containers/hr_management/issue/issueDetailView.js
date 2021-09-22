import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Card } from "antd";
import { HrLayout } from "../../templates/hr_manager/hrlayout";
import axiosInstance from "../../../components/connection";
import IssueUpdateForm  from "../../../components/hr_management/issue/issueUpdateForm";
import IssueDeleteForm  from "../../../components/hr_management/issue/issueDeleteForm";




class IssueDetail extends React.Component {
  state = {
    issue: {}
  };


 
  componentDidMount(){
    const issueID = this.props.match.params.issueID;
    axiosInstance
    .get(`/hr/Issue/${issueID}/`).then(res => {
      this.setState({
        issue: res.data
      });
    });
  }

  



  render() {
    return (
      <div>
        <HrLayout>
        <Card title={this.state.issue.Staff_issue }>
          <p>Staff_issue:{this.state.issue.Staff_issue} </p>
          <p> Date  :{this.state.issue.Date } </p>
          <p> Disciplinary_Action :{this.state.issue.Disciplinary_Action} </p>
        </Card>
        
        <IssueUpdateForm/>
        <IssueDeleteForm/>
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

export default IssueDetail;
