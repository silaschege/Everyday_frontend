import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Button, Card } from "antd";
import BusinessForm from "../../components/job_application/Forms/BusinessForm";


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

  handleDelete = event => {
    event.preventDefault();
    const businessID = this.props.match.params.businessID;
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${this.props.token}`
    };
    axios.delete(`http://127.0.0.1:8000/api_application/Business_vacancy/${businessID}/delete/`)
    .then(res => {
      if (res.status === 204) {
        this.props.history.push(`/applicants`);
      }
    })
  };

  

  render() {
    return (
      <div>
        <Card title={this.state.business.Business_name}>
          <p> Name:{this.state.business.Business_name} </p>
          </Card>

          <BusinessForm
        {...this.props}
        token={this.props.token}
        requestType="put"
        Applicant_Id={this.props.match.params.articleID}
        btnText="Update"
        />

        <form onSubmit={this.handleDelete}>
        <Button type="danger" htmlType="submit">
            Delete
          </Button>
        </form>

        

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
