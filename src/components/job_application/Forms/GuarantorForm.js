import React from "react";
import { Form, Input, Button ,InputNumber, DatePicker } from "antd";
import { connect } from "react-redux";
import axios from "axios";

const FormItem = Form.Item;


class ApplicantForm extends React.Component {
  
  handleFormSubmit = async (event, requestType, Applicant_Id) => {
    event.preventDefault();

    const postObj = {
      title: event.target.elements.title.value,
      content: event.target.elements.content.value
    }

    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${this.props.token}`,
    };
    
    if (requestType === "post") {
      await axios.post("http://127.0.0.1:8000/api_application/Applicant/create/", postObj)
        .then(res => {
          if (res.status === 201) {
            this.props.history.push(`/`);
          }
        })
    } else if (requestType === "put") {
      await axios.put(`http://127.0.0.1:8000/api_application/Applicant/${Applicant_Id}/update/`, postObj)
        .then(res => {
          if (res.status === 200) {
            this.props.history.push(`/`);
          }
        })
    }
  };

  render() {
    return (
      <div>
        <Form
          onSubmit={event =>
            this.handleFormSubmit(
              event,
              this.props.requestType,
              this.props.articleID
            )
          }
        >
          <FormItem label="First Name">
            <Input name="First_name" placeholder="Put a title here" />
          </FormItem>

          <FormItem label="Last Name">
            <Input name="Last_name" placeholder="Enter some content ..." />
          </FormItem>

          <FormItem label="Other Name">
            <Input name="Other_Names" placeholder="Enter some content ..." />
          </FormItem>

          <FormItem label="Last Name">
            <Input name="Last_name" placeholder="Enter some content ..." />
          </FormItem>

          <FormItem label="Email">
            <Input name="Email" placeholder="Enter some content ..." />
          </FormItem>
          

        <FormItem label="Id Number ">
            <Input name="Id_Number " placeholder="Enter some content ..." />
          </FormItem>

          <FormItem label="Phone Number">
            <Input name="Phone_Number" placeholder="Enter some content ..." />
          </FormItem>

          <FormItem label="Relationship">
            <Input name="Relationship" placeholder="Enter some content ..." />
          </FormItem>   

          <FormItem>
            <Button type="primary" htmlType="submit">
              {this.props.btnText}
            </Button>
          </FormItem>

        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(mapStateToProps)(ApplicantForm);