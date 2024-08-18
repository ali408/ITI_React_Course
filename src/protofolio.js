import "./protofolio.css";
import ProtofolioCard from "./protofolioCard";
function Protofolio() {
  return (
    <div className="protofolio">
      <div className="container pb-5">
        <h2>Protofolio</h2>
      </div>
      <div className="container">
        <div className="row g-4">
          <ProtofolioCard bg="#434343" text="Web Design" />
          <ProtofolioCard bg="#252525" text="Mobile Design" />
          <ProtofolioCard bg="#434343" text="Logo Design" />
          <ProtofolioCard bg="#252525" text="Web Application Development" />
          <ProtofolioCard bg="#434343" text="Mobile Application Development" />
          <ProtofolioCard bg="#252525" text="PWA Development" />
        </div>
      </div>
    </div>
  );
}

export default Protofolio;
