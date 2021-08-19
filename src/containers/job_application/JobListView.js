import React from "react";
import axios from "axios";
import Jobs from "../../components/job_application/Job";
// import CustomForm from "../components/Form";


class JobList extends React.Component {
  state = {
    jobs: []
  };

  fetchJobs = () => {
    axios.get("http://127.0.0.1:8000/api_application/Listing/").then(res => {
      this.setState({
        jobs: res.data
      });
    });
  }

  componentDidMount() {
    this.fetchJobs();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchJobs();      
    }
  }

  render() {
    return (
      <div>
        <Jobs data={this.state.jobs} /> <br />

        {/* hr administrator panel */}
        {/* <h2> Create an article </h2>
        <CustomForm requestType="post" articleID={null} btnText="Create" /> */}


      </div>
    );
  }
}

export default JobList;
