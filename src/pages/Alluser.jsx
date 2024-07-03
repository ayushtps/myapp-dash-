import React, { useEffect, useState } from "react";
import { MainDashHOC } from "../component/MainDashHOC";
import Header from "../layout/Header";
import "../asset/style/pages/Alluser.css";
import { Button, Form, Input, Modal, Table } from "antd";
import { Space, Tooltip } from "antd";
import moment from "moment/moment";
import { AiFillEdit } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { UserRegister } from "../redux/slices/RegisterSlice";
import { GetAllUser } from "../redux/slices/GetallUserSlice";
import { Notify } from "../Notify";
import { UserDelete } from "../redux/slices/DeleteUserSlice";
import { UserEdit } from "../redux/slices/EditUserSlice";
import { dataUser } from "../constants/data";
import { useLocation, useNavigate } from "react-router-dom";

function Alluser() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.Users.data);

  const [isModalOpen, setisModalOpen] = useState(false);
  const [isEditOpen, setisEditOpen] = useState(false);
  const [isShowOpen, setisShowOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [registerForm, setregisterForm] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    mobileNumber: "",
    confirmPassword: "",
    profileImage: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setregisterForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    setisModalOpen(false);
    setisEditOpen(false);
    setisShowOpen(false);
  };

  const handalsubmit = async () => {
    let result = await dispatch(UserRegister(registerForm));
    if (result.type == "users/fulfilled") {
      Notify("success", result.payload.message);
      setregisterForm({
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        mobileNumber: "",
        confirmPassword: "",
        profileImage: "",
      });
      setisModalOpen(false);
    } else {
      Notify("error", result.error.message);
    }
    document.querySelector("form").reset();
  };

  const handalEdit = (user) => {
    setisEditOpen(true);
    setregisterForm({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      mobileNumber: user.mobileNumber,
      _id: user._id,
    });
  };
  const handalView = (user) => {
    setisShowOpen(true);
    setregisterForm({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      mobileNumber: user.mobileNumber,
      _id: user._id,
    });
  };

  const handalEditSubmit = async () => {
    let result = await dispatch(UserEdit(registerForm));
    if (result.type == "update/fulfilled") {
      Notify("success", result.payload.message);
      setregisterForm({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        _id: "",
      });
      setisEditOpen(false);
    } else {
      Notify("error", result.error.message);
    }
  };
  const handalDelete = async (id) => {
    let result = await dispatch(UserDelete(id));
    if (result.type == "delete/fulfilled") {
      Notify("success", result.payload.message);
    } else {
      Notify("error", result.error.message);
    }
  };

  const columns = [
    {
      title: "UserId",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Mobile Number",
      dataIndex: "mobileNo",
      key: "mobileNo",
    },
  ];

  // const columns = [
  //   {
  //     title: 'key',
  //     dataIndex: 'key',
  //     key: 'key',
  //   },
  //   {
  //     title: 'UserId',
  //     dataIndex: '_id',
  //     key: '_id',
  //   },
  //   {
  //     title: 'Email',
  //     dataIndex: 'email',
  //     key: 'email',
  //   },
  //   {
  //     title: 'First Name',
  //     dataIndex: 'firstName',
  //     key: 'firstName',
  //   },
  //   {
  //     title: 'Last Name',
  //     dataIndex: 'lastName',
  //     key: 'lastName',
  //   },
  //   {
  //     title: 'Mobile Number',
  //     dataIndex: 'mobileNumber',
  //     key: 'mobileNumber',
  //   },
  //   {
  //     title: 'Created At',
  //     dataIndex: 'createdat',
  //     key: 'createdat',
  //     render: (timestamp) => {
  //       const date = new Date(timestamp * 1000);
  //       const formattedDate = moment(date).format('DD-MM-YYYY,hh:mm A')
  //       return {
  //         children: formattedDate,
  //         props: {
  //           "data-label": "Claim Date",
  //         },
  //       };
  //     },
  //   },
  //   {
  //     title: 'Action',
  //     key: 'action',
  //     render: (_, record) => (
  //       <Space size="middle">
  //         <Tooltip title="Edit user">
  //           <div onClick={() => handalEdit(record)} className='handalbtn'>
  //             <AiFillEdit style={{ color: '#ffc388' }} size={20} />
  //           </div>
  //         </Tooltip>
  //         <Tooltip title="View user">
  //           <div onClick={() => handalView(record)} className='handalbtn'>
  //             <FaEye style={{ color: '#ACDDDE' }} size={20} />
  //           </div>
  //         </Tooltip>
  //         <Tooltip title="Delete user">
  //           <div onClick={() => handalDelete(record._id)} className='handalbtn'>
  //             <MdDelete style={{ color: '#f47777' }} size={20} />
  //           </div>
  //         </Tooltip>
  //       </Space>
  //     ),
  //   },
  // ];

  // const data =
  //   state?.map((x, i) => ({
  //     key: (i + 1).toString(),
  //     _id: x._id,
  //     email: x.email,
  //     firstName: x.firstName,
  //     lastName: x.lastName,
  //     mobileNumber: x.mobileNumber,
  //     createdat: x.created_at,
  //   }))

  useEffect(() => {
    const page = params.get("page");
    if (page) {
      setCurrentPage(page);
    }
  }, [location.search]);

  const data = dataUser?.map((x, i) => ({
    _id: x._id,
    email: x.email,
    firstName: x.firstName,
    mobileNo: x.mobileNo,
  }));

  const handlePageChange = (page) => {
    if (page) {
      params.set("page", page == null ? 1 : page);
    }
    navigate(`?${params.toString()}`);
    setCurrentPage(page);
  };

  return (
    <>
      <div className="dash-chart-container">
        <div className="dash-header">
          <Header />
        </div>
        <div className="right-btn">
          <div className="add-user-btn">
            <button onClick={() => setisModalOpen(!isModalOpen)}>
              <span>Add New User</span>
            </button>
          </div>
        </div>
        <div className="table-sec">
          <Table
            columns={columns}
            dataSource={data}
            locale={{ emptyText: "No Data found" }}
            pagination={{
              current: currentPage,
              pageSize: 10,
              total: 20,
              onChange: handlePageChange,
            }}
            onRow={(record) => {
              return {
                onClick: () => {
                  navigate("user-details");
                },
              };
            }}
          />
        </div>
        <Modal
          open={isModalOpen}
          cancelButtonProps={{ style: { display: "none" } }}
          okButtonProps={{ style: { display: "none" } }}
          onCancel={handleCancel}
          centered
        >
          <div className="modal-header">
            <span>New User</span>
          </div>
          <div className="modal-form">
            <Form>
              <Form.Item>
                <Input
                  placeholder="First Name"
                  name="firstName"
                  value={registerForm.firstName}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  placeholder="Last Name"
                  name="lastName"
                  value={registerForm.lastName}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  placeholder="Mobile Number"
                  name="mobileNumber"
                  value={registerForm.mobileNumber}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  placeholder="Enter Email"
                  name="email"
                  value={registerForm.email}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  placeholder="Enter Password"
                  name="password"
                  type="password"
                  value={registerForm.password}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  value={registerForm.confirmPassword}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  placeholder="Profile Url"
                  name="profileImage"
                  value={registerForm.profileImage}
                  onChange={handleChange}
                />
              </Form.Item>

              <Form.Item>
                <div className="footer-form-btn">
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={handalsubmit}
                  >
                    Submit
                  </Button>
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </Modal>

        <Modal
          open={isEditOpen}
          cancelButtonProps={{ style: { display: "none" } }}
          okButtonProps={{ style: { display: "none" } }}
          onCancel={handleCancel}
          centered
        >
          <div className="modal-header">
            <span>Edit User</span>
          </div>
          <div className="modal-form">
            <Form>
              <Form.Item>
                <Input
                  value={registerForm.firstName}
                  name="firstName"
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  value={registerForm.lastName}
                  name="lastName"
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  value={registerForm.mobileNumber}
                  name="mobileNumber"
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  value={registerForm.email}
                  name="email"
                  onChange={handleChange}
                  disabled
                />
              </Form.Item>
              <Form.Item>
                <Input
                  value={registerForm._id}
                  name="_id"
                  onChange={handleChange}
                  disabled
                />
              </Form.Item>

              <Form.Item>
                <div className="footer-form-btn">
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={handalEditSubmit}
                  >
                    Submit
                  </Button>
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </Modal>

        <Modal
          open={isShowOpen}
          cancelButtonProps={{ style: { display: "none" } }}
          okButtonProps={{ style: { display: "none" } }}
          onCancel={handleCancel}
          centered
        >
          <div className="modal-header">
            <span>View User</span>
          </div>
          <div className="modal-form">
            <Form>
              <Form.Item>
                <Input
                  value={registerForm.firstName}
                  name="firstName"
                  disabled
                />
              </Form.Item>
              <Form.Item>
                <Input value={registerForm.lastName} name="lastName" disabled />
              </Form.Item>
              <Form.Item>
                <Input
                  value={registerForm.mobileNumber}
                  name="mobileNumber"
                  disabled
                />
              </Form.Item>
              <Form.Item>
                <Input value={registerForm.email} name="email" disabled />
              </Form.Item>
              <Form.Item>
                <Input value={registerForm._id} name="_id" disabled />
              </Form.Item>
            </Form>
          </div>
        </Modal>
      </div>
    </>
  );
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     callRegister: (props) => dispatch(UserRegister(props)),
//     callUsers: (props) => dispatch(GetAllUser(props))
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     registerData: state.registerApi,
//     UserData: state.Users
//   }
// }

export default MainDashHOC(Alluser);
