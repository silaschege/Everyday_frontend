import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Button, Card } from "antd";



class ApplicantDetail extends React.Component {
  state = {
    applicant: {}
  };


  componentDidMount(){
    const applicantID = this.props.match.params.applicantID;
    axios.get(`http://127.0.0.1:8000/api_application/Applicant/${applicantID}/`).then(res => {
      this.setState({
        applicant: res.data
      });
    });
  }



  render() {
    return (
      <div>
        <Card title={this.state.applicant.First_name}>
          <p> First_name:{this.state.applicant.First_name} </p>
         <p> Last_name:{this.state.applicant.Last_name} </p>
         <p> Level of education:{this.state.applicant.Level_of_Education} </p>
         <p> Course:{this.state.applicant.Course} </p>
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

export default connect(mapStateToProps)(ApplicantDetail);
