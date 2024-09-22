const Button = (props, key, onSelect) => {
  return (
    <button className="btn" onClick={props.onSelect}>
      {props.month}
    </button>
  );
};

export default Button;