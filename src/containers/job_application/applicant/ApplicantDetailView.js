import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Card } from "antd";
import { ApplicantLayout } from "../../templates/applicant/applicantlayout";
import axiosInstance from "../../../components/connection";




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

  // handleDelete = event => {
  //   event.preventDefault();
  //   const applicantID = this.props.match.params.applicantID;
  //   axios.defaults.headers = {
  //     "Content-Type": "application/json",
  //     Authorization: `Token ${this.props.token}`
  //   };
  //   axios.delete(`http://127.0.0.1:8000/api/job/Applicant/${applicantID}/delete/`)
  //   .then(res => {
  //     if (res.status === 204) {
  //       this.props.history.push(`/applicants`);
  //     }
  //   })
  // };



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
