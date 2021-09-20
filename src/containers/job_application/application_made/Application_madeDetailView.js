import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Card } from "antd";
import { ApplicantLayout } from "../../templates/applicant/applicantlayout";
import axiosInstance from "../../../components/connection";




class ApplicationMadeDetail extends React.Component {
  state = {
    applications_made: {}
  };


 
  componentDidMount(){
    const applicationID = this.props.match.params.applicationID;
    axiosInstance
    .get(`job/Applications/${applicationID}/`).then(res => {
      this.setState({
        applications_made: res.data
      });
    });
  }

  



  render() {
    return (
      <div>
        <ApplicantLayout>
        <Card title={this.state.applications_made.Application_made_Id }>
          <p> Job_listing:{this.state.applications_made.Job_listing} </p>
        </Card>
        </ApplicantLayout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default ApplicationMadeDetail;
