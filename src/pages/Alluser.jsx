import React from 'react'
import { MainDashHOC } from '../component/MainDashHOC'
import Header from '../layout/Header'
import '../asset/style/pages/Alluser.css'
import { AiFillEdit } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Space, Table, Tag } from 'antd';

function Alluser() {

  const columns = [
    {
      title: 'key',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'UserId',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Mobile Number',
      dataIndex: 'mobileNumber',
      key: 'mobileNumber',
    },
    {
      title: 'Created At',
      dataIndex: 'createdat',
      key: 'createdat',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <AiFillEdit style={{color:'#ffc388'}}  size={20}/>
          <FaEye style={{color:'#ACDDDE'}} size={20}/>
          <MdDelete  style={{color:'#f47777'}} size={20}/>
        </Space>
      ),
    },
  ];


  const data = [
    {
      key: '1',
      _id: 'John Brown',
      email: 32,
      firstName: 'New York No. 1 Lake Park',
      lastName: 'New York No. 1 Lake Park',
      mobileNumber: 'New York No. 1 Lake Park',
      createdat: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      _id: 'John Brown',
      email: 32,
      firstName: 'New York No. 1 Lake Park',
      lastName: 'New York No. 1 Lake Park',
      mobileNumber: 'New York No. 1 Lake Park',
      createdat: 'New York No. 1 Lake Park',
    },
    {
      key: '3',
      _id: 'John Brown',
      email: 32,
      firstName: 'New York No. 1 Lake Park',
      lastName: 'New York No. 1 Lake Park',
      mobileNumber: 'New York No. 1 Lake Park',
      createdat: 'New York No. 1 Lake Park',
    },
  ];
  return (
    <div className="dash-chart-container">
      <div className="dash-header">
        <Header />
      </div>
      <div className="right-btn">
        <div className="add-user-btn">
          <button><span>Add New User</span></button>
        </div>
      </div>
      <div className="table-sec">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  )
}

export default MainDashHOC(Alluser)