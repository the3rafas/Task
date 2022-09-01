import React from 'react'

import classes from './rank.module.css'
const Rank:React.FC<{word:string}> = (props) => {
    return (
      <div className={classes.rank}>
        Best:<br/>
        {props.word} %
      </div>
    );
  };
  
  export default Rank;
  