import React from "react";
import Guarantor from "../../../components/job_application/guarantor/guarantor"
import axiosInstance from "../../../components/connection";
import { ApplicantLayout } from "../../templates/applicant/applicantlayout";



class GuarantorList extends React.Component {
  state = {
    guarantors: []
  };

  fetchGuarantor = () => {
    axiosInstance
    .get("job/Guarantors/").then(res => {
      this.setState({
        guarantors: res.data
      });
    });
  }

  componentDidMount() {
    this.fetchGuarantor();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchGuarantor();      
    }
  }

  render() {
    return (
      <div>
        <ApplicantLayout>
        <Guarantor data={this.state.guarantors} /> <br />
        </ApplicantLayout>
      </div>
    );
  }
}

export default GuarantorList;
