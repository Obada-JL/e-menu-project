import Logo from "../assets/Logo.png";
import ArabicFlag from "../assets/arabic flag.png";
import TurkishFlag from "../assets/Flag_of_Turkey.svg.png";
import "./NavBar.css";
function NavBar() {
  return (
    <div>
      <div className="d-flex justify-content-around w-100 pt-5 mb-3">
        <div>
          {/* logo */}
          <img
            src={Logo}
            alt="Kale Restaurant Logo"
            width={75}
            style={{ userSelect: "none" }}
          />
        </div>
        <div className="d-flex w-25 justify-content-between align-items-center fw-bold flex-row-reverse">
          {/* main sections */}
          <a href="#" className="sections menu__link">
            المأكولات
          </a>
          <a href="#" className="sections menu__link">
            المشروبات
          </a>
          <a href="#" className="sections menu__link">
            الحلويات
          </a>
        </div>
        <div className="d-flex gap-2 align-items-center">
          {/* languages */}
          <img src={ArabicFlag} alt="Arabic" className="languagesFlags" />
          <img src={TurkishFlag} alt="Turkish" className="languagesFlags" />
        </div>
      </div>
      {/* <hr
        style={{
          width: "85%",
          margin: "0 auto",
          border: "none",
          height: "2px",
          backgroundColor: "#603813",
        }}
      /> */}
      <div class="custom-shape-divider-top-1725551573">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}
export default NavBar;
