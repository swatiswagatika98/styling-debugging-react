// import React, { useState } from 'react';

// import Button from '../../UI/Button/Button';
// import './CourseInput.css';

// const CourseInput = props => {
//   const [enteredValue, setEnteredValue] = useState('');
//   const [isActive, setIsActive] = useState(false);

//   const goalInputChangeHandler = event => {
//     setIsActive(true);
//     setEnteredValue(event.target.value);

//   };

//   const formSubmitHandler = event => {
//     event.preventDefault();
//     props.onAddGoal(enteredValue);
//   };

//   return (
//     <form onSubmit={formSubmitHandler}>
//       <div className="form-control">
//         <label>Course Goal</label>
//         <input type="text" onChange={goalInputChangeHandler} value={enteredValue} />
//       </div>
//       <Button type="submit" isActive ={isActive}/>
//     </form>
//   );
// };

// export default CourseInput;

// import React, { useState } from 'react';

// import Button from '../../UI/Button/Button';
// import './CourseInput.css';

// const CourseInput = props => {
//   const [enteredValue, setEnteredValue] = useState('');
//   const [enteredCollege, setEnteredCollege] = useState('');
//   const [isActive, setIsActive] = useState(false);

//   const goalInputChangeHandler = event => {
//     setIsActive(true);
//     setEnteredValue(event.target.value);
//   };

//   const collegeInputChangeHandler = event => {
//     setEnteredCollege(event.target.value);
//   };

//   const formSubmitHandler = event => {
//     event.preventDefault();
//     props.onAddGoal(enteredValue, enteredCollege);
//     setEnteredValue('');
//     setEnteredCollege('');
//     setIsActive(false);
//   };

//   return (
//     <form onSubmit={formSubmitHandler}>
//       <div className="form-control">
//         <label>Course Goal</label>
//         <input type="text" onChange={goalInputChangeHandler} value={enteredValue} />
//       </div>
//       <div className="form-control">
//         <label>College Name</label>
//         <input type="text" onChange={collegeInputChangeHandler} value={enteredCollege} />
//       </div>
//       <Button type="submit" isActive={isActive} />
//     </form>
//   );
// };

// export default CourseInput;

import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [enteredCollege, setEnteredCollege] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [formError, setFormError] = useState('');

  const goalInputChangeHandler = event => {
    setIsActive(true);
    setEnteredValue(event.target.value);
  };

  const collegeInputChangeHandler = event => {
    setEnteredCollege(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if (enteredCollege.trim() === '') {
      setFormError('College Name is required.');
      return;
    }

    setFormError('');
    props.onAddGoal(enteredValue, enteredCollege);
    setEnteredValue('');
    setEnteredCollege('');
    setIsActive(false);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} value={enteredValue} />
      </div>
      <div className="form-control">
        <label>College Name</label>
        <input type="text" onChange={collegeInputChangeHandler} value={enteredCollege} />
        {formError && <p className="error-text">{formError}</p>}
      </div>
      <Button type="submit" isActive={isActive} />
    </form>
  );
};

export default CourseInput;