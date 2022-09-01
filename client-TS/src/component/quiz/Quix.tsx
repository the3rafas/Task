import React from 'react'
const Quiz:React.FC<{word:string}> = (props) => {
  return (
    <div>
      <h1>{props.word}</h1>
    </div>
  );
};

export default Quiz;
