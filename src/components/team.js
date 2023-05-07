import Johan from "./../images/teamMember/Johan400600.png";
import Firman from "./../images/teamMember/Firman1.png";
import Cazz from "./../images/teamMember/Cazz400600.png";

export default function Team() {
  return (
    <div className="fitting-content" id="teams">
      <div className="container" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
        <div className="title-container" data-aos="fade-up">
          <h3 className="text-center fw-bold">OUR TEAMS</h3>
        </div>
        <div className="center"></div>
        <div className="row py-4">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 px-4">
            <div className="card my-2" style={{ width: "100%", boxShadow: "black" }} data-aos="fade-up">
            <img src={Johan} className="card-img-top" alt="..."/>
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Johan Agathon S.T., M.T.</h5>
              <p className="card-text">Head Edumaitreya</p>
            </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 px-4">
            <div className="card my-2" style={{ width: "100%", boxShadow: "black" }} data-aos="fade-up">
            <img src={Firman} className="card-img-top" alt="..."/>
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Firman Nugraha S.Pd., M.Pd.</h5>
              <p className="card-text">Education Reasercher</p>
            </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 px-4">
            <div className="card my-2" style={{ width: "100%", boxShadow: "black" }} data-aos="fade-up">
            <img src={Cazz} className="card-img-top" alt="..."/>
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Cazz</h5>
              <p className="card-text">Game Designer</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}