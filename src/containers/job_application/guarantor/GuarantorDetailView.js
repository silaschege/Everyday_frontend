import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Card } from "antd";
import { ApplicantLayout } from "../../templates/applicant/applicantlayout";
import axiosInstance from "../../../components/connection";




class GuarantorDetail extends React.Component {
  state = {
    guarantor: {}
  };


 
  componentDidMount(){
    const guarantorID = this.props.match.params.guarantorID;
    axiosInstance
    .get(`job/Guarantors/${guarantorID}/`).then(res => {
      this.setState({
        guarantor: res.data
      });
    });
  }

  



  render() {
    return (
      <div>
        <ApplicantLayout>
        <Card title={this.state.guarantor.Guarantors_Id}>
          <p> First_name:{this.state.guarantor.First_name} </p>
          <p> Last_name:{this.state.guarantor.Last_name} </p>
          <p> Other_Names :{this.state.guarantor.Other_Names } </p>
          <p> Relationship:{this.state.guarantor.Relationship} </p>
          <p> Applicant:{this.state.guarantor.Applicant} </p>
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

export default GuarantorDetail;
