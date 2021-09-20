import React from "react";
import JobListing from "../../../components/job_application/job_listing/job_listing"
import axiosInstance from "../../../components/connection";
import { ApplicantLayout } from "../../templates/applicant/applicantlayout";



class JobList extends React.Component {
  state = {
    job: []
  };

  fetchJob = () => {
    axiosInstance
    .get("job/Listing/").then(res => {
      this.setState({
        job: res.data
      });
    });
  }

  componentDidMount() {
    this.fetchJob();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchJob();      
    }
  }

  render() {
    return (
      <div>
        <ApplicantLayout>
        <JobListing data={this.state.job} /> <br />
        </ApplicantLayout>
      </div>
    );
  }
}

export default JobList;
