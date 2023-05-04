import BannerImage1 from "./../images/banner/banner.png";
import BannerImage2 from "./../images/banner/banner1.png";
import BannerImage3 from "./../images/banner/banner2.png";
import FrontImage1 from "./../images/banner/frimage.png";

export default function Carousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{ maxHeight: "100vh", minHeight: "60vh"}}>
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner" style={{ maxHeight: "100vh", minHeight: "60vh"}}>
      <div className="carousel-item active" style={{ maxHeight: "100vh", minHeight: "60vh"}}>
        <img src={BannerImage1} className="d-block w-100 carousel-img" style={{ minHeight: "60vh" }} alt="..."/>
        {/* <div className="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur nulla necessitatibus, non perspiciatis numquam et?
            Quis quibusdam quidem sed temporibus? Animi iure.
          </p>
        </div> */}
      </div>
      <div className="carousel-item" style={{ maxHeight: "100vh", minHeight: "60vh"}}>
        <img src={BannerImage2} className="d-block w-100 carousel-img" style={{ minHeight: "60vh" }} alt="..."/>
        {/* <div className="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur nulla necessitatibus, non perspiciatis numquam et?
            Quis quibusdam quidem sed temporibus? Animi iure.
          </p>
        </div> */}
      </div>
      <div className="carousel-item" style={{ maxHeight: "100vh", minHeight: "60vh"}}>
        <img src={BannerImage3} className="d-block w-100 carousel-img" style={{ minHeight: "60vh" }} alt="..."/>
        {/* <div className="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur nulla necessitatibus, non perspiciatis numquam et?
            Quis quibusdam quidem sed temporibus? Animi iure.
          </p>
        </div> */}
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  );
}