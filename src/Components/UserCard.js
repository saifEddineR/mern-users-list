import React, { useState } from 'react';
import '../css/userCard.css';
//ract bootstrap
import { Modal } from 'react-bootstrap';
// react icons import
import { RiDeleteBin5Line } from 'react-icons/ri';
import { AiFillEdit } from 'react-icons/ai';

const UserCard = () => {
  // show or hide modal hook and functions
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='card' id={true ? 'black' : 'white'}>
      <span onClick={handleShow}>
        <img
          src='https://i.pinimg.com/originals/d5/25/61/d52561e104775f407908c8c395afc6fa.jpg'
          alt='user'
        />
      </span>
      <h4 className='user-name'>Kim Ji-soo</h4>
      <h6 className='user-rank'>actor</h6>
      <p className='user-age'>age {27} yo</p>
      <a href='' className='user-email'>
        mail@gmail.com
      </a>
      <br />
      <AiFillEdit className='edit-icon icons' />
      <RiDeleteBin5Line className='delete-icon icons' />
    </div>
  );
};

export default UserCard;
