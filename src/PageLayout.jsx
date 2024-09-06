import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./PageLayout.css";
import Footer from "./components/Footer";
// import Footer from "./Footer";

function PageLayout() {
  return (
    <div className="pageContainer" style={{ width: "100vw" }}>
      <NavBar />
      <div className="MainPageConatiner">
        <Outlet />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
export default PageLayout;
