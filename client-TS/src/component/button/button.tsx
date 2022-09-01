import React from "react";
const Button: React.FC<{
  style: string;
  data?: string;
  action:any ;
  lable: string;
}> = (props) => {
  return (
    <button
      className={props.style}
      data-value={props.data ? props.data : ""}
      onClick={props.action ? props.action : () => {}}
    >
      {props.lable}{" "}
    </button>
  );
};

export default Button;
