import "./MainPage.css";
import image1 from "../assets/image1.JPG";
import image2 from "../assets/image2.JPG";
function MainPage() {
  return (
    <div>
      <div className="sectionsContainer">
        <div className="section">
          <h2>المأكولات</h2>
          <div className="d-flex gap-5 justify-content-center mt-4 mb-3">
            <div>
              <img src={image1} width={200} className="rounded sectionImage" />
              <div className="h5 mt-2">مأكولات غربية </div>
            </div>
            <div>
              <img src={image2} width={200} className="rounded sectionImage" />
              <div className="h5 mt-2">مأكولات غربية </div>
            </div>
            <div>
              <img src={image1} width={200} className="rounded sectionImage" />
              <div className="h5 mt-2">مأكولات غربية </div>
            </div>
            <div>
              <img src={image2} width={200} className="rounded sectionImage" />
              <div className="h5 mt-2">مأكولات شرقية</div>
            </div>
          </div>
        </div>
        <div className="section">
          <h2>المشروبات</h2>
          <div className="d-flex gap-5 justify-content-center mt-4 mb-3">
            <div>
              <img src={image1} width={200} className="rounded sectionImage" />
              <div className="h5 mt-2">مشروبات باردة </div>
            </div>
            <div>
              <img src={image2} width={200} className="rounded sectionImage" />
              <div className="h5 mt-2">مشروبات ساخنة</div>
            </div>
          </div>
        </div>
        <div className="section">
          <h2>الحلويات</h2>
          <div className="d-flex gap-5 justify-content-center mt-4 mb-3">
            <div>
              <img src={image1} width={200} className="rounded sectionImage" />
              <div className="h5 mt-2">حلويات ساخنة </div>
            </div>
            <div>
              <img src={image2} width={200} className="rounded sectionImage" />
              <div className="h5 mt-2">حلويات باردة</div>
            </div>
            <div>
              <img src={image1} width={200} className="rounded sectionImage" />
              <div className="h5 mt-2">بوظة</div>
            </div>
          </div>
        </div>
        <div className="section">
          <h2>ا</h2>
        </div>
      </div>
      <div class="custom-shape-divider-bottom-1725552380">
        <svg
          style={{ marginBottom: "-2px" }}
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
export default MainPage;
