import React from 'react';
import { NavLink } from "react-router-dom"; 

import StudentReg from './Components/Register/StudentReg';
import LecturerReg from './Components/Register/LecturerReg';
import SubjectReg from './Components/Register/SubjectReg';
import CourseReg from './Components/Register/CourseReg' ;
import GroupReg from './Components/Register/GroupReg';
import StudentDetails from './Components/UserDetails/StudentDetails';
import LecturerDetails from './Components/UserDetails/LecturerDetails';
import SubjectDetails from './Components/UserDetails/SubjectDetails';
import GroupDetails from './Components/UserDetails/GroupDetails';
import CourseDetails from './Components/UserDetails/CourseDetails';
import SubjectEva from './Components/Evaluation/SubjectEva';
import LecturerEva from './Components/Evaluation/LecturerEva';
import CourseEva from './Components/Evaluation/CourseEva'

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
    handleStudentDetails = () => {
      const StudentDetails = this.state.StudentDetails;
      this.setState(state => ({Menu:7}));
    }
    handleLecturerDetails = () => {
      const LecturerDetails = this.state.LecturerDetails;
      this.setState(state => ({Menu:8}));
    }
    handleSubjectDetails = () => {
      const SubjectDetails = this.state.SubjectDetails;
      this.setState(state => ({Menu:9}));
    }
    handleGroupDetails = () => {
      const GroupDetails = this.state.GroupDetails;
      this.setState(state => ({Menu:10}));
    }
    handleCourseDetails = () => {
      const CourseDetails = this.state.CourseDetails;
      this.setState(state => ({Menu:11}));
    }
    handleSubjectEva = () => {
      const SubjectEva = this.state.SubjectEva;
      this.setState(state => ({Menu:12}));
    }
  
    onCollapse = (collapsed) => {
      console.log(collapsed);
      this.setState({ collapsed });
    }
  
    render() {
      let StudentRegs,LecturerRegs,SubjectRegs,CourseRegs,GroupRegs;
      let StudentDetailss,LecturerDetailss,SubjectDetailss,GroupDetailss,CourseDetailss;
      let SubjectEvas;
      
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
        StudentDetailss = (
          <div>
            <StudentDetails/>
          </div>
        )
      }
      else if(this.state.Menu===8){
        LecturerDetailss = (
          <div>
            <LecturerDetails/>
          </div>
        )
      }
      else if(this.state.Menu===9){
        SubjectDetailss = (
          <div>
            <SubjectDetails/>
          </div>
        )
      }
      else if(this.state.Menu===10){
        GroupDetailss = (
          <div>
            <GroupDetails></GroupDetails>
          </div>
        )
      }
      else if(this.state.Menu===11){
        CourseDetailss = (
          <div>
            <CourseDetails></CourseDetails>
          </div>
        )
      }
      else if(this.state.Menu===12){
        SubjectEvas = (
          <div>
            <SubjectEva></SubjectEva>
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
                <Menu.Item key="7" onClick={this.handleStudentDetails}>Student</Menu.Item>
                <Menu.Item key="8" onClick={this.handleLecturerDetails}>Lecturer</Menu.Item>
                <Menu.Item key="9" onClick={this.handleSubjectDetails}>Subjects</Menu.Item>
                <Menu.Item key="10" onClick={this.handleGroupDetails}>Groups</Menu.Item>
                <Menu.Item key="11" onClick={this.handleCourseDetails}>Course</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={<span><Icon type="team" /><span>Evaluation</span></span>}
              >
                <Menu.Item key="12">Lecturer</Menu.Item>
                <Menu.Item key="13" onClick={this.handleSubjectEva}>Subject</Menu.Item>
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
              {StudentDetailss}
              {LecturerDetailss}
              {SubjectDetailss}
              {GroupDetailss}
              {CourseDetailss}
              {SubjectEvas}
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