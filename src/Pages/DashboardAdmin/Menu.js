import React from 'react';
import { NavLink } from "react-router-dom"; 

import StudentReg from './Components/Register/StudentReg';
import LecturerReg from './Components/Register/LecturerReg';
import SubjectReg from './Components/Register/SubjectReg';
import CourseReg from './Components/Register/CourseReg' ;
import GroupReg from './Components/Register/GroupReg';
import StudentSearch from './Components/UserDetails/StudentSearch';
import LecturerSearch from './Components/UserDetails/LecturerSearch';
import SubjectSearch from './Components/UserDetails/SubjectSearch';

import {
    Layout, Menu, Breadcrumb, Icon,
  } from 'antd';
import shadows from '@material-ui/core/styles/shadows';
  
  const {
    Header, Content, Footer, Sider,
  } = Layout;
  const SubMenu = Menu.SubMenu;
  
  class SiderDemo extends React.Component {
    state = {
      collapsed: false ,
      Menu:0 ,
    };

    handleClick = () => {
      const collapsed = this.state.collapsed;
      this.setState(state => ({ collapsed: !collapsed}));
    };

    handleStudentReg = () => {
      const StudentReg = this.state.StudentReg;
      this.setState(state => ({Menu:2}));
    }
    handleLectureReg = () => {
      const LecturerReg = this.state.LecturerReg;
      this.setState(state => ({Menu:3}));
    }
    handleSubjectReg = () => {
      const SubjectReg = this.state.SubjectReg;
      this.setState(state => ({Menu:4}));
    }
    handleCourseReg = () => {
      const CourseReg = this.state.SubjectReg;
      this.setState(state => ({Menu:5}));
    }
    handleGroupReg = () => {
      const GroupReg = this.state.GroupReg;
      this.setState(state => ({Menu:6}));
    }
    handleStudentSearch = () => {
      const StudentSearch = this.state.StudentSearch;
      this.setState(state => ({Menu:7}));
    }
    handleLecturerSearch = () => {
      const LecturerSearch = this.state.LecturerSearch;
      this.setState(state => ({Menu:8}));
    }
    handleSubjectSearch = () => {
      const SubjectSearch = this.state.SubjectSearch;
      this.setState(state => ({Menu:9}));
    }
  
    onCollapse = (collapsed) => {
      console.log(collapsed);
      this.setState({ collapsed });
    }
  
    render() {
      let StudentRegs,LecturerRegs,SubjectRegs,CourseRegs,GroupRegs;
      let StudentSearchs,LecturerSearchs,SubjectSearchs;
      
      if(this.state.Menu===2){
        StudentRegs = (
          <div>
            <StudentReg></StudentReg>
          </div>
        )
      }
      else if(this.state.Menu===3){
        LecturerRegs = (
          <div>
            <LecturerReg></LecturerReg>
          </div>
        )
      }
      else if(this.state.Menu===4){
        SubjectRegs = (
          <div>
            <SubjectReg></SubjectReg>
          </div>
        )
      }
      else if(this.state.Menu===5){
        CourseRegs = (
          <div>
            <CourseReg></CourseReg>
          </div>
        )
      }
      else if(this.state.Menu===6){
        GroupRegs = (
          <div>
            <GroupReg></GroupReg>
          </div>
        )
      }
      else if(this.state.Menu===7){
        StudentSearchs = (
          <div>
            <StudentSearch></StudentSearch>
          </div>
        )
      }
      else if(this.state.Menu===8){
        LecturerSearchs = (
          <div>
            <LecturerSearch></LecturerSearch>
          </div>
        )
      }
      else if(this.state.Menu===9){
        SubjectSearchs = (
          <div>
            <SubjectSearch></SubjectSearch>
          </div>
        )
      }
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
             
              <SubMenu
                key="sub1"
                title={<span><Icon type="user" /><span>Register</span></span>}
              >
                <Menu.Item key="2" onClick={this.handleStudentReg}>Student</Menu.Item>
                <Menu.Item key="3" onClick={this.handleLectureReg}>Lecturer</Menu.Item>
                <Menu.Item key="4" onClick={this.handleSubjectReg}>Subjects</Menu.Item>
                <Menu.Item key="5" onClick={this.handleCourseReg}>Courses</Menu.Item>
                <Menu.Item key="6" onClick={this.handleGroupReg}>Groups</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={<span><Icon type="user" /><span>Users</span></span>}
              >
                <Menu.Item key="7" onClick={this.handleStudentSearch}>Student</Menu.Item>
                <Menu.Item key="8" onClick={this.handleLecturerSearch}>Lecturer</Menu.Item>
                <Menu.Item key="9" onClick={this.handleSubjectSearch}>Subjects</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={<span><Icon type="team" /><span>Evaluation</span></span>}
              >
                <Menu.Item key="8">Lecture</Menu.Item>
                <Menu.Item key="9">Subject</Menu.Item>
                <Menu.Item key="10">Course</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub4"
                title={<span><Icon type="team" /><span>Feedback</span></span>}
              >
                <Menu.Item key="11">Lecture</Menu.Item>
                <Menu.Item key="12">Subject</Menu.Item>
                <Menu.Item key="13">Course</Menu.Item>
              </SubMenu>
              <Menu.Item key="14">
                <Icon type="file" />
                <span>File</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 ,textAlign:'right'}} >
              Logged as a Admin
            </Header>
            <Content style={{ margin: '0 16px' }}>
              {StudentRegs}
              {LecturerRegs}
              {SubjectRegs}
              {CourseRegs}
              {GroupRegs}
              {StudentSearchs}
              {LecturerSearchs}
              {SubjectSearchs}
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Rowdy Design ©2019 Created by Dinith
            </Footer>
          </Layout>
        </Layout>
      );
    }
  }
  
 export default SiderDemo;