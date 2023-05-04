import { useState } from "react";
import LogoSiraru from "./../images/logo/siraru.png";

export default function NavigationBar() {

  const[index, setIndex] = useState(1);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white shadow shadow-sm fixed-top" style={{ width : "100vw" }}>
      <div className="container ms-auto">
        <img src={LogoSiraru} className="img-fluid logo-nav" alt="" />
        <a className="navbar-brand fw-bold" href="#" style={{ fontSize: 20, color: "#3763a4", marginLeft: 8 }} onClick={() => setIndex(0)}>
          EDUMAITREYA
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className={index === 1 ? "selected-nav" : "unselected-nav" }>
              <a className={"nav-link fw-bolder nav-menu" + (index === 1 ? " active-nav" : "")} href="#about" onClick={() => setIndex(1)}>
                Our Dream
              </a>
              <div className={index === 1 ? "selection-active-nav" : "selection-nav" }></div>
            </li>
            {/* <li className=" unselected-nav dropdown">
              <a className="nav-link fw-bolder nav-menu dropdown-toggle" href="#about" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tentang
              </a>
              <div className="selection-nav"></div>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <a className="dropdown-item nav-menu-item active-nav-menu-item" href="#">
                    Tentang Siraru
                  </a>
                </li>
                <li>
                  <a className="dropdown-item nav-menu-item" href="#">
                    Team
                  </a>
                </li>
                <li>
                  <a className="dropdown-item nav-menu-item" href="#">
                    Testimonial
                  </a>
                </li>
              </ul>
            </li> */}
            <li className={index === 2 ? "selected-nav" : "unselected-nav" }>
              <a className={"nav-link fw-bolder nav-menu" + (index === 2 ? " active-nav" : "")} href="#services" onClick={() => setIndex(2)}>
                Services
              </a>
              <div className={index === 2 ? "selection-active-nav" : "selection-nav" }></div>
            </li>
            <li className={index === 3 ? "selected-nav" : "unselected-nav" }>
              <a className={"nav-link fw-bolder nav-menu" + (index === 3 ? " active-nav" : "")} href="#teams" onClick={() => setIndex(3)}>
                Teams
              </a>
              <div className={index === 3 ? "selection-active-nav" : "selection-nav" }></div>
            </li>
            <li className={index === 4 ? "selected-nav" : "unselected-nav" }>
              <a className={"nav-link fw-bolder nav-menu" + (index === 4 ? " active-nav" : "")} href="#contact" onClick={() => setIndex(4)}>
                Contact
              </a>
              <div className={index === 4 ? "selection-active-nav" : "selection-nav" }></div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}