import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Card } from "antd";
import { HrLayout } from "../../templates/hr_manager/hrlayout";
import axiosInstance from "../../../components/connection";




class AnnouncemnetDetail extends React.Component {
  state = {
    announcemnets: {}
  };


 
  componentDidMount(){
    const announcemnetID = this.props.match.params.announcemnetID;
    axiosInstance
    .get(`/hr/Announcement/${announcemnetID}/`).then(res => {
      this.setState({
        announcemnets: res.data
      });
    });
  }

  



  render() {
    return (
      <div>
        <HrLayout>
        <Card title={this.state.announcemnets.Message }>
          <p> From:{this.state.announcemnets.From} </p>
          <p> To:{this.state.announcemnets.To} </p>
          <p> Time:{this.state.announcemnets.Time} </p>
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

export default AnnouncemnetDetail;
