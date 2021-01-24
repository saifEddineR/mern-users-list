import React, { useState } from 'react';
import '../css/userCard.css';
//ract bootstrap
import { Modal } from 'react-bootstrap';
// react icons import
import { RiDeleteBin5Line } from 'react-icons/ri';
import { AiFillEdit } from 'react-icons/ai';
import axios from 'axios';
import EditUser from './EditUser';

const UserCard = ({ _id, name, age, email, occupation, img }) => {
  // show or hide modal hook and functions
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const deleteUser = () => {
    axios
      .delete(`/users/deleteUser/${_id}`)
      .then((res) => console.log(res.data));
  };
  let userO = { _id, name, age, email, occupation, img };

  return (
    <div className='card' id={true ? 'black' : 'white'}>
      <span onClick={handleShow}>
        <img src={img} alt='user' />
      </span>
      <h4 className='user-name'>{name}</h4>
      <h6 className='user-rank'>{occupation}</h6>
      <p className='user-age'>age {age} yo</p>
      <a href='' className='user-email'>
        {email}
      </a>
      <br />
      <button className='card-btn edit-btn'>
        {/* <AiFillEdit className='edit-icon icons' /> */}
        <EditUser {...userO} />
      </button>
      <button className='card-btn delete-btn' onClick={deleteUser}>
        <a href='/'>
          <RiDeleteBin5Line className='delete-icon icons' />
        </a>
      </button>
    </div>
  );
};

export default UserCard;
