import React from 'react';
import { Form, Input, Button, Spin,Checkbox } from 'antd';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../store/action/auth';
import Icon from '@ant-design/icons';
import PropTypes from 'prop-types';

// const FormItem = Form.Item;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;


class NormalLoginForm extends React.Component {
  state = {
    username: '',
    password: '',
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };


  onSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.form.validateFields((err, values) => {
  //     if (!err) {
  //       this.props.onAuth(values.userName, values.password);
  //       this.props.history.push('/');
  //     }
  //   });
  // }

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, password } = this.state;
    
    }

    
    return (
        <div>
        //     {errorMessage}
        //     {
        //         this.props.loading ?

        //         <Spin indicator={antIcon} />

        //         :

      <Form name="basic" labelCol={{span: 8,}} wrapperCol={{span: 16,}} initialValues={{remember: true, }}
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
       >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        Or 
                    <NavLink 
                        style={{marginRight: '10px'}} 
                        to='/signup/'> signup
                    </NavLink>
      </Form.Item>
     </Form>
            // }
      </div>
    );
          // }
}

// const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NormalLoginForm);








<Form name="basic" labelCol={{span: 8,}} wrapperCol={{span: 16,}} initialValues={{remember: true, }}>

<Form.Item label="Username" name="username" rules={[{required: true,message: 'Please input your username!', },]}>
  <Input />
</Form.Item>

<Form.Item label="Password" name="password" rules={[{required: true,message: 'Please input your password!',},]}>
  <Input.Password />
</Form.Item>

<Form.Item name="remember" valuePropName="checked"  wrapperCol={{offset: 8, span: 16,}}>
  <Checkbox>Remember me</Checkbox>
</Form.Item>

<Form.Item wrapperCol={{offset: 8,span: 16,}}>
  <Button type="primary" htmlType="submit">
    Submit
  </Button>
  Or 
  <NavLink style={{marginRight: '10px'}} to='/signup/'> 
  signup
  </NavLink>
</Form.Item>

</Form>




state = {
  username: '',
  password: '',
};

static propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};


onSubmit = (e) => {
  e.preventDefault();
  this.props.login(this.state.username, this.state.password);
};

onChange = (e) => this.setState({ [e.target.name]: e.target.value });


render() {
  if (this.props.isAuthenticated) {
    return <Redirect to="/" />;
  }
  const { username, password } = this.state;
  