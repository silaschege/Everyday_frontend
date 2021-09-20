import React , { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;


 
export class HrLayout extends React.Component{

  
      

  render() {
        return (

  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>

       <Menu.Item key="1">
        <Link to="/business">Business</Link>
       </Menu.Item>

       <Menu.Item key="2">
        <Link to="/announcement">Announcement</Link>
       </Menu.Item>

       <Menu.Item key="3">
        <Link to="/complain">Complain</Link>
       </Menu.Item>

       <Menu.Item key="4">
        <Link to="/employee">Employee</Link>
       </Menu.Item>

       <Menu.Item key="5">
        <Link to="/issue">Issue</Link>
       </Menu.Item>

       <Menu.Item key="6">
        <Link to="/task">Task</Link>
       </Menu.Item>

       <Menu.Item key="7">
        <Link to="/workday">Workday</Link>
       </Menu.Item>


       <Menu.Item key="8">
        <Link to="/hrlogout">Logout</Link>
       </Menu.Item>


      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item> */}
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
      {this.props.children}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Everyday Copright 2020</Footer>
  </Layout>
 );
      }
}

// const mapDispatchToProps = dispatch => {
//   return {
//       // logout: () => dispatch(actions.logout()) 
//   }
// }



 export default  withRouter(HrLayout);

