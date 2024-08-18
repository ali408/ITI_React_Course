import "./button.css";
function Button({ text, bg, color }) {
  return (
    <button style={{ backgroundColor: bg, color: color }} className="main-btn">
      {text}
    </button>
  );
}

export default Button;
