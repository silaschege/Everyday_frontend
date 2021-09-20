import React from "react";
import axios from "axios";
import ApplicationMade from "../../../components/job_application/application_made/application_made"
import axiosInstance from "../../../components/connection";
import { ApplicantLayout } from "../../templates/applicant/applicantlayout";



class ApplicationMadeList extends React.Component {
  state = {
    applications: []
  };

  fetchApplicationMade = () => {
    axiosInstance
    .get("job/Applications").then(res => {
      this.setState({
        applications: res.data
      });
    });
  }

  componentDidMount() {
    this.fetchApplicationMade();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchApplicationMade();      
    }
  }

  render() {
    return (
      <div>
        <ApplicantLayout>
        <ApplicationMade data={this.state.applications} /> <br />
        </ApplicantLayout>
      </div>
    );
  }
}

export default ApplicationMadeList;
