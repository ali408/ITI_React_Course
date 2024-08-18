import Button from "./button";
import "./hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-container">
          <h2>Katie Reed</h2>
          <p>Web Developer and Designer.</p>
          <Button text="Contact Me" bg="transparent" color={"white"} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
