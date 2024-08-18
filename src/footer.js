import Button from "./button";
import "./footer.css";
function Footer() {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div>
              <h3>GET IN TOUCH</h3>
              <div className="row mb-3">
                <div className="col-1">
                  <i class="fa-regular fa-envelope"></i>
                </div>
                <div className="col-8">example@yahoo.com</div>
              </div>
              <div className="row">
                <div className="col-1">
                  <i class="fa-solid fa-phone"></i>
                </div>
                <div className="col-8">+484 984 151</div>
              </div>
            </div>
          </div>
          <div className="col-6 text-center">
            <Button text="Contact Me" bg="transparent" color={"white"} />
          </div>
          <div className="col-3">
            <div className="text-right">
              <div className="d-flex">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-facebook-f"></i>
              </div>
              <div>
                <p>Lorem ipsum, dolor sit amet .</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
