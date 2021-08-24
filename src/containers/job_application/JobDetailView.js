import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Button, Card } from "antd";
import JobForm from "../../components/job_application/Forms/JobForm";


class JobDetail extends React.Component {
  state = {
    job: {}
  };


  componentDidMount(){
    const jobID = this.props.match.params.jobID;
    axios.get(`http://127.0.0.1:8000/api_application/Listing/${jobID}/`).then(res => {
      this.setState({
        job: res.data
      });
    });
  }

  
  handleDelete = event => {
    event.preventDefault();
    const jobID = this.props.match.params.jobID;
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${this.props.token}`
    };

    
        // hr dahsboard
  //   axios.delete(`http://127.0.0.1:8000/api_application/Listing/${jobID}/delete/`)
  //   .then(res => {
  //     if (res.status === 204) {
  //       this.props.history.push(`/`);
  //     }
  //   })
   };

  render() {
    return (
      <div>
        <Card title={this.state.job.Position}>
          <p> Post:{this.state.job.Position} </p>
         <p> Level of education:{this.state.job.Education_level} </p>
        </Card>
        <JobForm/>
        {/* hr administrator */}
        {/* <CustomForm
          {...this.props}
          token={this.props.token}
          requestType="put"
          articleID={this.props.match.params.articleID}
          btnText="Update"
        /> */}

        {/* <form onSubmit={this.handleDelete}>
          <Button type="danger" htmlType="submit">
            Delete
          </Button> */}
       
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(mapStateToProps)(JobDetail);
