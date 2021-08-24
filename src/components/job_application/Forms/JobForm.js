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
          <FormItem label="Education level">
            <Input name="Education_level" placeholder="Put a title here" />
          </FormItem>

          <FormItem label="Course">
            <Input name="Course" placeholder="Enter some content ..." />
          </FormItem>

          <FormItem label="Years Experience">
            <Input name="Years_experience" placeholder="Enter some content ..." />
          </FormItem>

          <Form.Item label="End of Application Date">
        <DatePicker label="End_of_application_date" placeholder="Enter some content ..." />
        </Form.Item>

          <FormItem label="Position">
            <Input name="Position" placeholder="Enter some content ..." />
          </FormItem>

          <FormItem label="Location">
            <Input name="Location" placeholder="Enter some content ..." />
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