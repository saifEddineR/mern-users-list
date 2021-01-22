import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import axios from 'axios';

const Users = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    axios
      .get('/user')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <UserCard />
    </div>
  );
};

export default Users;
