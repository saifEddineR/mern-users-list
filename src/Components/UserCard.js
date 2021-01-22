import React, { useState } from 'react';
import '../css/userCard.css';
//ract bootstrap
import { Modal } from 'react-bootstrap';
// react icons import
import { RiDeleteBin5Line } from 'react-icons/ri';
import { AiFillEdit } from 'react-icons/ai';

const UserCard = ({ name, age, email, occupation, img }) => {
  // show or hide modal hook and functions
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <AiFillEdit className='edit-icon icons' />
      <RiDeleteBin5Line className='delete-icon icons' />
    </div>
  );
};

export default UserCard;
