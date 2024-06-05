const Button = ({ children, onClick, active }) => {
  return (
    <button className="button" onClick={onClick} data-active={active}>
      {children}
    </button>
  );
};

export default Button;
