import React,{useState,useEffect} from 'react';
import { Form, Input, Button, Spin,Checkbox } from 'antd';
import { connect } from 'react-redux';
import { NavLink ,Redirect,useHistory} from 'react-router-dom';
import { login } from '../store/action/auth';
import Icon from '@ant-design/icons';
import PropTypes from 'prop-types';


const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

function NormalLoginForm () {
  
  const [Username,setUsername]=useState(" ");
  const [Password,setPassword]=useState(" ");
  const history =useHistory();

  useEffect(() => {
    if (localStorage.getItem('user-info')){
      history.push("/")
    }
    
  }, []) 
  

  async function loginmaster() {
    console.warn(Username,Password)
    let item ={Username,Password}
    let result= await fetch("http://127.0.0.1:8000/api-auth/login/",{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(item)
    });
    result= await result.json();
    localStorage.setItem(JSON.stringify(result))
    history.push("/")
  }
  

  // render(){
    return(
      <div>
        <Form name="basic" labelCol={{span: 8,}} wrapperCol={{span: 16,}} initialValues={{remember: true, }}>

          <Form.Item label="Username" name="username" rules={[{required: true,message: 'Please input your username!', },]}>
          <Input name="Username" placeholder="Put a username here" 
          onChange={(e)=>setUsername(e.target.value)}/>
          </Form.Item>

          <Form.Item label="Password" name="password" rules={[{required: true,message: 'Please input your password!',},]}>
          <Input.Password name="Password" placeholder="Put a password here" 
          onChange={(e)=>setPassword(e.target.value)}
          />
          </Form.Item>

        <Form.Item name="remember" valuePropName="checked"  wrapperCol={{offset: 8, span: 16,}}>
        <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{offset: 8,span: 16,}}>
        <Button onClick={loginmaster} type="primary" htmlType="submit">
          Submit
        </Button>
          Or 
        <NavLink style={{marginRight: '10px'}} to='/signup/'> 
          signup
        </NavLink>
        </Form.Item>

      </Form>
      </div>
    );
  // }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth?.isAuthenticated,
});


export default connect(mapStateToProps,{login})(NormalLoginForm);
