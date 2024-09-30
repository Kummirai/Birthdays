/* eslint-disable react/prop-types */
const Button = (props) => {
  return (
    <button className={props.isSelected ? 'active' : 'btn'} onClick={props.onSelect}>
      {props.month}
    </button>
  );
};

export default Button;
