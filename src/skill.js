import "./skill.css";
function Skill({ skill, prec }) {
  return (
    <div className="skill">
      <p>{skill}</p>
      <div className="box">
        <div className="bb" style={{ width: prec }}></div>
      </div>
    </div>
  );
}

export default Skill;
