import React from 'react';
import {useParams} from 'react-router'
function User(){
  const {first_name, last_name}= useParams()
  return(
    <div>User {first_name} ** {last_name}</div>
  );
}

export default User;