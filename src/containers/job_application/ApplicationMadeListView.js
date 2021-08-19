import React from "react";
import axios from "axios";
import Applications_made from "../../components/job_application/Applications_made";



class ApplicationMadeList extends React.Component {
  state = {
    applicationmade: []
  };

  fetchApplicants = () => {
    axios.get("http://127.0.0.1:8000/api_application/Application_made/").then(res => {
      this.setState({
        applicationmade: res.data
      });
    });
  }

  componentDidMount() {
    this.fetchApplications_made();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchApplications_made();      
    }
  }

  render() {
    return (
      <div>
        <Applications_made data={this.state.applicationmade} /> <br />

        


      </div>
    );
  }
}

export default ApplicationMadeList;
