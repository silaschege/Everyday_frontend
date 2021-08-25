import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Button, Card } from "antd";
import GuarantorForm from "../../components/job_application/Forms/GuarantorForm";



class GuarantorDetail extends React.Component {
  state = {
    guarantor: {}
  };


  componentDidMount(){
    const guarantorID = this.props.match.params.guarantorID;
    axios.get(`http://127.0.0.1:8000/api_application/Guarantors/${guarantorID}/`).then(res => {
      this.setState({
        guarantor: res.data
      });
    });
  }

  handleDelete = event => {
    event.preventDefault();
    const guarantorID = this.props.match.params.guarantorID;
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${this.props.token}`
    };
    axios.delete(`http://127.0.0.1:8000/api_application/Guarantors/${guarantorID}/delete/`)
    .then(res => {
      if (res.status === 204) {
        this.props.history.push(`/applicants`);
      }
    })
  };



  render() {
    return (
      <div>
        <Card title={this.state.guarantor.First_name}>
          <p> First_name:{this.state.guarantor.First_name} </p>
         <p> Last_name:{this.state.guarantor.Last_name} </p>
         <p> Email:{this.state.guarantor.Email} </p>
         <p> Relationship:{this.state.guarantor.Relationship} </p>
        </Card>
        <GuarantorForm
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

export default connect(mapStateToProps)(GuarantorDetail);
