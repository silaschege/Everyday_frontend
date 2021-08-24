import React from "react";
import axios from "axios";
import Application from "../../components/job_application/Applications";



class ApplicationList extends React.Component {
  state = {
    applications: []
  };

  fetchJobs = () => {
    axios.get("http://127.0.0.1:8000/api_application/Application_made/").then(res => {
      this.setState({
        applications: res.data
      });
    });
  }

  componentDidMount() {
    this.fetchApplication();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchApplication();      
    }
  }

  render() {
    return (
      <div>
        <Application data={this.state.applications} /> <br />
      </div>
    );
  }
}

export default ApplicationList;
