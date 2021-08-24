import React from "react";
import axios from "axios";
import Guarantor from "../../components/job_application/Guarantor";
// import CustomForm from "../components/Form";


class GuarantorList extends React.Component {
  state = {
    guarantors: []
  };

  fetchGuarantor = () => {
    axios.get("http://127.0.0.1:8000/api_application/Guarantors/").then(res => {
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
        <Guarantor data={this.state.guarantors} /> <br />
      </div>
    );
  }
}

export default GuarantorList;
