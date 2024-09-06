import "./Footer.css";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <div className="d-flex gap-3 pt-5">
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.0139476565982!2d37.3753938!3d37.057150799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e1ececa8d791%3A0x3a2e685038999a64!2sKale%20Cafe!5e0!3m2!1str!2str!4v1725561119507!5m2!1str!2str"
          width="550"
          height="400"
          style={{
            border: "0",
            // width:"25%"
          }}
          className="p-3"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div>
        <div>
          <div>
            <FontAwesomeIcon
              icon={faWhatsapp}
              size="2xl"
              style={{ fontSize: "50px", color: "#25D366" }}
            />
            <a href="https://api.whatsapp.com/send/?phone=%2B905355066697&text&type=phone_number&app_absent=0">
              +90 535 506 66 97
            </a>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
export default Footer;
