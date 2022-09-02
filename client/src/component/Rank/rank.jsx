import classes from './rank.module.css'
const Rank = (props) => {
    return (
      <div className={classes.rank}>
        Top:<br/>
        {props.word} %
      </div>
    );
  };
  
  export default Rank;
  