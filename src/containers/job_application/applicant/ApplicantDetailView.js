import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Card } from "antd";
import { ApplicantLayout } from "../../templates/applicant/applicantlayout";
import axiosInstance from "../../../components/connection";
import ApplicantUpdateForm  from "../../../components/job_application/applicant/applicantUpdateForm";
import ApplicantDeleteForm from "../../../components/job_application/applicant/applicantDeleteForm";



class ApplicantDetail extends React.Component {
  state = {
    applicant: {}
  };


 
  componentDidMount(){
    const applicantID = this.props.match.params.applicantID;
    axiosInstance
    .get(`job/Applicant/${applicantID}/`).then(res => {
      this.setState({
        applicant: res.data
      });
    });
  }

  



  render() {
    return (
      <div>
        <ApplicantLayout>
        <Card title={this.state.applicant.First_Name}>
          <p> First_name:{this.state.applicant.First_Name} </p>
         <p> Last_name:{this.state.applicant.Last_Name} </p>
         <p> Level of education:{this.state.applicant.Level_of_Education} </p>
         <p> Course:{this.state.applicant.Course} </p>
        </Card>

        <ApplicantUpdateForm/>
        <ApplicantDeleteForm/>
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

export default ApplicantDetail;
