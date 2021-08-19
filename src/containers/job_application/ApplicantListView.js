import React from "react";
import axios from "axios";
import Applicants from "../../components/job_application/Applicant";



class ApplicantList extends React.Component {
  state = {
    applicants: []
  };

  fetchApplicants = () => {
    axios.get("http://127.0.0.1:8000/api_application/Applicant/").then(res => {
      this.setState({
        applicants: res.data
      });
    });
  }

  componentDidMount() {
    this.fetchApplicants();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchApplicants();      
    }
  }

  render() {
    return (
      <div>
        <Applicants data={this.state.applicants} /> <br />

        


      </div>
    );
  }
}

export default ApplicantList;
