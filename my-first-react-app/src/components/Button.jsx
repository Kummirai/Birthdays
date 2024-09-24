const Button = (props, isSelected) => {
  return (
    <button className="btn" onClick={props.onSelect}>
      {props.month}
    </button>
  );
};

export default Button;