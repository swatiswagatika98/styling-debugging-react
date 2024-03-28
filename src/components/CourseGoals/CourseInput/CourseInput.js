import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isActive, setIsActive] = useState(false);

  const goalInputChangeHandler = event => {
    setIsActive(true);
    setEnteredValue(event.target.value);

  };

  const formSubmitHandler = event => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} value={enteredValue} />
      </div>
      <Button type="submit" isActive ={isActive}/>
    </form>
  );
};

export default CourseInput;
