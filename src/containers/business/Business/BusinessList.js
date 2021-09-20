import React from "react";
import axios from "axios";
import Business from "../../../components/business/business";
import axiosInstance from "../../../components/connection";
import {Button} from "antd";
import { Link, withRouter } from 'react-router-dom';
import HrLayout from "../../templates/hr_manager/hrlayout"



class BusinessList extends React.Component {
  state = {
    businesses: []
  };

  fetchBusiness = () => {
    axiosInstance
    .get("business/Business/").then(res => {
      this.setState({
        businesses: res.data
      });
    });
  }

  componentDidMount() {
    this.fetchBusiness();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchBusiness();      
    }
  }

  render() {
    return (
      <div>
        <HrLayout>
          
        <Button type="primary" htmlType="submit" onClick="location.href='/businesscreate'">
        <Link to="/businesscreate">Create</Link>
            </Button>

  
        <Business data={this.state.businesses} /> <br />
        </HrLayout>
      </div>
    );
  }
}

export default BusinessList;
