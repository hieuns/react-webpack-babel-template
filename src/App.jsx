import React from 'react';
import './App.css';

const App = (props) => {
  const {title, ...restOfProps} = props;

  console.log(restOfProps);

  return (
    <div className='main'>
      <span className='title'>{title}</span>
    </div>
  );
};

export default App;
