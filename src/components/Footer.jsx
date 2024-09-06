import "./Footer.css";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <div className="d-flex gap-5 pt-5">
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.0139476565982!2d37.3753938!3d37.057150799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e1ececa8d791%3A0x3a2e685038999a64!2sKale%20Cafe!5e0!3m2!1str!2str!4v1725561119507!5m2!1str!2str"
          width="400"
          height="250"
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
      <div className="d-flex flex-column justify-content-center">
        <div>
          <div className="d-flex gap-3">
            <FontAwesomeIcon
              icon={faWhatsapp}
              size="2xl"
              style={{ fontSize: "50px", color: "#25D366" }}
              className="mb-3"
            />
            <a
              className="footerlink whatsapp"
              href="https://api.whatsapp.com/send/?phone=%2B905355066697&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              +90 535 506 66 97
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <a href="https://www.facebook.com/kalecafe23" target="_blank">
            <FontAwesomeIcon
              icon={faFacebookF}
              style={{ fontSize: "50px", color: "#4267B2" }}
            />
          </a>
          <a href="https://www.tiktok.com/@kalecafe23" target="_blank">
            <FontAwesomeIcon
              icon={faTiktok}
              style={{ fontSize: "50px", color: "black" }}
            />
          </a>
          <a href="https://www.instagram.com/kalecafe23/" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ fontSize: "50px", color: "#833AB4" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
