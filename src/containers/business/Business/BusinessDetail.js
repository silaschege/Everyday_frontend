import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Card } from "antd";
import axiosInstance from "../../../components/connection";
import { Link, withRouter } from 'react-router-dom';
import {Button} from "antd";
import HrLayout from "../../templates/hr_manager/hrlayout"
import BusinessUpdateForm from "../../../components/business/BusinesssUpdateFrom";
import BusinessDeleteForm from "../../../components/business/BusinessDelete";




class BusinessDetail extends React.Component {
  state = {
    businesses: {}
  };


 
  componentDidMount(){
    const businessID = this.props.match.params.businessID;
    axiosInstance
    .get(`business/Business/${businessID}/`).then(res => {
      this.setState({
        businesses: res.data
      });
    });
  }

  



  render() {
    return (
      <div>
        <HrLayout>
        <Card title={this.state.businesses.Business_Name}>
          <p> Industry:{this.state.businesses.Industry} </p>
          <p> Email:{this.state.businesses.Email} </p>
        </Card>

        {/* <Button type="primary" htmlType="submit" onClick="location.href='/businessupdate'">
        <Link to="/businessupdate">Update</Link>
            </Button> */}
            <BusinessUpdateForm/>
            <BusinessDeleteForm/>

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

export default BusinessDetail;
