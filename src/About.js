import React from 'react';
import {useLocation, useHistory} from 'react-router';
function About(){
  const location = useLocation();
  const history = useHistory();
   console.log(location);
   function GoBackHandler(){
     history.goBack();
   }
  return(
 <>
    <div>About</div>
    <div>Location = {location.pathname} </div>
    <div>from = {location.state.from} </div>
  <button onClick={GoBackHandler}>GO Back!!</button>
  </>);
}

export default About;