import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Card } from "antd";
import { ApplicantLayout } from "../../templates/applicant/applicantlayout";
import axiosInstance from "../../../components/connection";
import JoblistingUpdateForm  from "../../../components/job_application/job_listing/joblistingUpdateForm";
import JoblistingDeleteForm from "../../../components/job_application/job_listing/joblistingDeleteForm";




class JobDetail extends React.Component {
  state = {
    job: {}
  };


 
  componentDidMount(){
    const jobID = this.props.match.params.jobID;
    axiosInstance
    .get(`job/Listing/${jobID}/`).then(res => {
      this.setState({
        job: res.data
      });
    });
  }

  



  render() {
    return (
      <div>
        <ApplicantLayout>
        <Card title={this.state.job.Job_listing_Id }>
          <p> Education_level:{this.state.job.Education_level } </p>
          <p> Course:{this.state.job.Course} </p>
          <p> Years_experience :{this.state.job.Years_experience} </p>
          <p> End_of_application_date:{this.state.job.End_of_application_date} </p>
          <p> Position:{this.state.job.Position} </p>
        </Card>

        <JoblistingUpdateForm/>
        <JoblistingDeleteForm/>
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

export default JobDetail;
