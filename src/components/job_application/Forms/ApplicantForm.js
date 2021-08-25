import React from "react";
import { Form, Input, Button ,InputNumber, DatePicker } from "antd";
import { connect } from "react-redux";
import axios from "axios";

const FormItem = Form.Item;


class ApplicantForm extends React.Component {
  
  handleFormSubmit = async (event, requestType, applicantID) => {
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
            this.props.history.push(`/applicants`);
          }
        })
    } else if (requestType === "put") {
      await axios.put(`http://127.0.0.1:8000/api_application/Applicant/${applicantID}/update/`, postObj)
        .then(res => {
          if (res.status === 200) {
            this.props.history.push(`/applicants`);
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
              this.props.applicantID
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
          
        <Form.Item label="Date of Birth">
        <DatePicker label="Date_of_birth" placeholder="Enter some content ..." />
        </Form.Item>

        <FormItem label="Id Number ">
            <Input name="Id_Number " placeholder="Enter some content ..." />
          </FormItem>

          <FormItem label="Phone Number">
            <Input name="Phone_Number" placeholder="Enter some content ..." />
          </FormItem>

          <FormItem label="Level of Education">
            <Input name="Level_of_Education" placeholder="Enter some content ..." />
          </FormItem>

          <FormItem label="Course">
            <Input name="Course" placeholder="Enter some content ..." />
          </FormItem>

          <FormItem label="Other Education">
            <Input name="Other_Education" placeholder="Enter some content ..." />
          </FormItem>

          <FormItem label="Previous Job ">
            <Input name="Previous_Job" placeholder="Enter some content ..." />
          </FormItem>

        <Form.Item label="Time Worked At Prevoius Job">
          <InputNumber  name="Time_Worked_There" placeholder="Enter some content ..."/>
        </Form.Item>

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