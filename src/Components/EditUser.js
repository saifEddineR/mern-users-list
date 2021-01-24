import '../css/userCard.css';
import '../css/addUser.css';
import React, { useState } from 'react';
import axios from 'axios';
import { MdPersonAdd } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';
import { Modal, Form } from 'antd';
import 'antd/dist/antd.css';

const EditUser = ({ _id, name, age, occupation, email, img }) => {
  const [newUser, setNewUser] = useState({
    name: name,
    age: age,
    occupation: occupation,
    email: email,
    img: img,
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  // modal show/hide hook and functions ----------------------
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
    console.log(newUser);
    axios
      .put(`/users/updateUser/${_id}`, newUser)
      .then((res) => console.log(res))
      .catch((err) => alert('error : you missed a required'));
    setNewUser({
      name: '',
      age: '',
      occupation: '',
      email: '',
      img: '',
    });
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  // handle input data and send post request
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <div>
      <span onClick={showModal} className='card-btn edit-btn'>
        <AiFillEdit className='edit-icon icons' />
      </span>
      <Modal
        title='Add User'
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form onSubmit={handleOk}>
          <Form.Item
            label='Full Name'
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <input
              value={newUser.name}
              name='name'
              onChange={handleInput}
              required
            />
          </Form.Item>
          <Form.Item
            label='Occupation'
            rules={[
              {
                required: true,
                message: 'Please input your occupation!',
              },
            ]}
          >
            <input
              value={newUser.occupation}
              name='occupation'
              onChange={handleInput}
              required
            />
          </Form.Item>
          <Form.Item
            label='Age'
            rules={[
              {
                required: true,
                message: 'Please input your age!',
              },
            ]}
          >
            <input
              value={newUser.age}
              name='age'
              onChange={handleInput}
              required
            />
          </Form.Item>
          <Form.Item
            label='Email'
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <input
              value={newUser.email}
              name='email'
              onChange={handleInput}
              required
            />
          </Form.Item>
          <Form.Item
            label='Picture'
            rules={[
              {
                required: true,
                message: 'Please input your picture!',
              },
            ]}
          >
            <input
              value={newUser.img}
              name='img'
              onChange={handleInput}
              required
            />
          </Form.Item>
          <button type='submit' onClick={handleOk} id='submit-btn'>
            <a href='/'>submit</a>
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default EditUser;
