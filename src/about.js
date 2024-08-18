import "./about.css";
import Button from "./button";
function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h2>About Me</h2>
          </div>
          <div className="col-8">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio id, et vitae asperiores suscipit deleniti minus maiores
              quia tempora laborum repellat vel veniam quidem rerum, a
              voluptatum, molestiae delectus quo? Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Distinctio id, et vitae asperiores
              suscipit deleniti minus maiores quia tempora laborum repellat vel
              veniam quidem rerum, a voluptatum, molestiae delectus quo?
            </p>
            <Button text="Download Resume" bg="black" color={"white"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
