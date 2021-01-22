import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get('/users')
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(users);
  return (
    <div className='users-list'>
      {/* ---------- map on users list ---------- */}
      {users.length > 0
        ? users.map((user, i) => <UserCard key={user._id} {...user} />)
        : true}
        
    </div>
  );
};

export default Users;
