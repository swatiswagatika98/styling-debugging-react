// import React from 'react';

import './Button.css';

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

// export default Button;

import React, { useState } from 'react';

function App({isActive}) {
  // const [isActive, setIsActive] = useState(false);

  // const toggleButton = () => {
  //   setIsActive(!isActive);
  // };

  return (
    <div>
      <button className={isActive ? 'active-button' : 'inactive-button'} >
        Add Goal
        {/* {isActive ? 'Active' : 'Inactive'} Button */}
      </button>
      
    </div>
  );
}

export default App;

