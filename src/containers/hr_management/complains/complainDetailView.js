import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Card } from "antd";
import { HrLayout } from "../../templates/hr_manager/hrlayout";
import axiosInstance from "../../../components/connection";




class ComplainDetail extends React.Component {
  state = {
    complains: {}
  };


 
  componentDidMount(){
    const complainsID = this.props.match.params.complainsID;
    axiosInstance
    .get(`/hr/Complain/${complainsID}/`).then(res => {
      this.setState({
        complains: res.data
      });
    });
  }

  



  render() {
    return (
      <div>
        <HrLayout>
        <Card title={this.state.complains.Staff_issue }>
          <p> Date :{this.state.complains.Date} </p>
          <p> Disciplinary_Action :{this.state.complains.Disciplinary_Action } </p>
          <p> Employee :{this.state.complains.Employee} </p>
        </Card>
        </HrLayout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default ComplainDetail;
