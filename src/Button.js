const Button = ({ buttonText, tab, setTab }) => {
  return (
    <button
      className={buttonText === tab ? "selected" : null}
      type="button"
      onClick={() => setTab(buttonText)}
    >
      {buttonText}
    </button>
  );
};

export default Button;
