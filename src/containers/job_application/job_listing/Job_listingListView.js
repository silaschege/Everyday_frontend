import React from "react";
import JobListing from "../../../components/job_application/job_listing/job_listing"
import axiosInstance from "../../../components/connection";
import { ApplicantLayout } from "../../templates/applicant/applicantlayout";
import {Button} from "antd";
import { Link, withRouter } from 'react-router-dom';



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

        <Button type="primary" htmlType="submit" onClick="location.href='/businesscreate'">
        <Link to="/joblistingcreate">Create</Link>
        </Button>

        <JobListing data={this.state.job} /> <br />
        </ApplicantLayout>
      </div>
    );
  }
}

export default JobList;
