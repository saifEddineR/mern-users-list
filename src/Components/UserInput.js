import '../css/addUser.css';
import React, { useState } from 'react';
import { MdPersonAdd } from 'react-icons/md';
import { Modal, Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';

const UserInput = () => {
  const [newUser, setNewUser] = useState({
    name: '',
    age: '',
    occupation: '',
    email: '',
    img: '',
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  // modal show/hide hook and functions ----------------------
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
    console.log(newUser);
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
    <div className='add-user'>
      <button type='primary' onClick={showModal}>
        <MdPersonAdd />
      </button>
      <Modal
        title='Basic Modal'
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form method='POST' action='/users/newUser'>
          <Form.Item
            label='Full Name'
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <input value={newUser.name} name='name' onChange={handleInput} />
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
            <input value={newUser.age} name='age' onChange={handleInput} />
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
            <input value={newUser.email} name='email' onChange={handleInput} />
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
            <input value={newUser.img} name='img' onChange={handleInput} />
          </Form.Item>
          <button type='submit' onClick={handleOk}>
            submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default UserInput;
