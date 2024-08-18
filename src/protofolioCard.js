import "./protofolioCard.css";
function ProtofolioCard({ text, bg }) {
  return (
    <div className="col-4">
      <div className="card-box" style={{ backgroundColor: bg }}>
        {text}
      </div>
    </div>
  );
}

export default ProtofolioCard;
