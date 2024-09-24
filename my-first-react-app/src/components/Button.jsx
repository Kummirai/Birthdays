/* eslint-disable react/prop-types */
const Button = (props) => {
  return (
    <button className="btn" onClick={props.onSelect}>
      {props.month}
    </button>
  );
};

export default Button;
