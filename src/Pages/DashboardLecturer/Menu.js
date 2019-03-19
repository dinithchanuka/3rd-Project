import React from 'react';
import { NavLink } from "react-router-dom"; 
import {MDBCol, MDBRow} from 'mdbreact';

import StudentReg from './StudentReg';
import LecturerReg from './LecturerReg';
import SubjectReg from './SubjectReg';
import CourseReg from './CourseReg' ;
import StudentSearch from './StudentSearch';

import {
    Layout, Menu, Breadcrumb, Icon,
  } from 'antd';
  
  const {
    Header, Content, Footer, Sider,
  } = Layout;
  const SubMenu = Menu.SubMenu;
  
  class SiderDemo extends React.Component {
    state = {
      collapsed: false,
    };

    handleClick = () => {
      const collapsed = this.state.collapsed;
      this.setState(state => ({ open: !collapsed}));
    };
  
    onCollapse = (collapsed) => {
      console.log(collapsed);
      this.setState({ collapsed });
    }
  
    render() {
      return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>Dashboard</span>
              </Menu.Item>

              <Menu.Item key="2">
                <Icon type="pie-chart" />
                <span>Profile</span>
              </Menu.Item>

              <Menu.Item key="5">
                <Icon type="pie-chart" />
                <span>Settings</span>
              </Menu.Item>

              <Menu.Item key="6">
                <Icon type="pie-chart" />
                <span>Evalution Form</span>
              </Menu.Item>

              <Menu.Item key="7">
                <Icon type="pie-chart" />
                <span>Reports</span>
              </Menu.Item>
              
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 ,textAlign:'right'}} >
              Logged as a Lecturer
            </Header>
            <Content style={{ margin: '0 16px' }}>
              <MDBRow>
                <MDBCol md = "9">
                  
                </MDBCol>
                <MDBCol md = "3">
                  <p>Live Promo</p>
                  <hr></hr>
                </MDBCol>
              </MDBRow>
              
            </Content>
            <Layout></Layout>
            <Footer style={{ textAlign: 'center' }}>
              Rowdy Design ©2019 Created by Dinith
            </Footer>
          </Layout>
        </Layout>
      );
    }
  }
  
 export default SiderDemo;