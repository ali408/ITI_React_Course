import Skill from "./skill";
import "./skills.css";
function Skills() {
  return (
    <div className="skills">
      <div className="container text-center text-white mb-5">
        <h2>Skills</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe minus
          numquam, soluta consectetur fuga enim voluptates officia nostrum,
          perferendis vel mollitia sapiente delectus modi nobis facilis
          dignissimos? Corporis, rerum itaque!
        </p>
      </div>
      <div className="container pt-5">
        <div className="row">
          <div className="col-6 text-white text-center">
            <h3>My Focus</h3>
            <p>UI/UX Design</p>
            <p>Responsive Design</p>
            <p>Web Design</p>
            <p>Mobile App Design</p>
          </div>
          <div className="col-6 text-white">
            <Skill skill="HTML" prec="90%" />
            <Skill skill="CSS" prec="75%" />
            <Skill skill="JAVASCRIPT" prec="90%" />
            <Skill skill="REACT" prec="70%" />
            <Skill skill="NODE JS" prec="85%" />
            <Skill skill="ANGULAR" prec="65%" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
