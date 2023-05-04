import BannerImage1 from "./../images/banner/banner.png";

export default function Team() {
  return (
    <div className="fitting-content" id="teams">
      <div className="container" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
        <div className="title-container" data-aos="fade-up">
          <h3 className="text-center fw-bold">OUR TEAMS</h3>
        </div>
        <div className="row py-4">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 px-4">
            <div className="card my-2" style={{ width: "100%", boxShadow: "black" }} data-aos="fade-up">
            <img src={BannerImage1} className="card-img-top" alt="..."/>
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">John Doe</h5>
              <p className="card-text">Chief Executive Office</p>
            </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 px-4">
            <div className="card my-2" style={{ width: "100%", boxShadow: "black" }} data-aos="fade-up">
            <img src={BannerImage1} className="card-img-top" alt="..."/>
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">John Doe</h5>
              <p className="card-text">Chief Executive Office</p>
            </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 px-4">
            <div className="card my-2" style={{ width: "100%", boxShadow: "black" }} data-aos="fade-up">
            <img src={BannerImage1} className="card-img-top" alt="..."/>
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">John Doe</h5>
              <p className="card-text">Chief Executive Office</p>
            </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 px-4">
            <div className="card my-2" style={{ width: "100%", boxShadow: "black" }} data-aos="fade-up">
            <img src={BannerImage1} className="card-img-top" alt="..."/>
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">John Doe</h5>
              <p className="card-text">Chief Executive Office</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}