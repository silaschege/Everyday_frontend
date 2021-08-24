import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Button, Card } from "antd";



class BusinessDetail extends React.Component {
  state = {
    business: {}
  };


  componentDidMount(){
    const businessID = this.props.match.params.businessID;
    axios.get(`http://127.0.0.1:8000/api_application/Business_vacancy/${businessID}/`).then(res => {
      this.setState({
        business: res.data
      });
    });
  }

  

  render() {
    return (
      <div>
        <Card title={this.state.business.Business_name}>
          <p> Name:{this.state.business.Business_name} </p>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(mapStateToProps)(BusinessDetail);
