import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Card } from "antd";
import { HrLayout } from "../../templates/hr_manager/hrlayout";
import axiosInstance from "../../../components/connection";




class WorkdayDetail extends React.Component {
  state = {
    workday: {}
  };


 
  componentDidMount(){
    const workdayID = this.props.match.params.workdayID;
    axiosInstance
    .get(`/hr/Work_day/${workdayID}/`).then(res => {
      this.setState({
        workday: res.data
      });
    });
  }

  



  render() {
    return (
      <div>
        <HrLayout>
        <Card title={this.state.workday.Work_day_id }>
          <p>Work_day_id:{this.state.workday.Work_day_id} </p>
          <p> Date:{this.state.workday.Date} </p>
          <p> Employee :{this.state.workday.Employee} </p>
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

export default WorkdayDetail;
