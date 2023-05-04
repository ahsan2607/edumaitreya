import { useState } from "react";
import BannerImage1 from "./../images/banner/banner.png";
import BannerImage2 from "./../images/banner/banner1.png";
import BannerImage3 from "./../images/banner/banner2.png";
import FrontImage1 from "./../images/banner/frimage.png";

export default function Banner() {

  const [count, setCount] = useState(0);

  return (
    <div className="banner center min-vh-100" style={count === 1 ? { backgroundImage: `url(${BannerImage2})` } : count === -1 ? { backgroundImage: `url(${BannerImage3})` } : { backgroundImage: `url(${BannerImage1})` }} id="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={FrontImage1} alt="" height={"120px"} width={"auto"} />
          </div>
          <div className="col-md-6 center">
            <div className="container text-white">
            <h1>KOMUNITAS SIRARU</h1>
                <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}