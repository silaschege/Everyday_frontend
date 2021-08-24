import React from "react";
import axios from "axios";
import Business from "../../components/job_application/Business";



class BusinessList extends React.Component {
  state = {
    businesses: []
  };

  fetchBusiness = () => {
    axios.get("http://127.0.0.1:8000/api_application/Business_vacancy/").then(res => {
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
        <Business data={this.state.businesses} /> <br />
      </div>
    );
  }
}

export default BusinessList;
