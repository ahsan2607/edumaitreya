export default function Footer(){
    return(
      <footer id="contact">
        <div className="footer-down bg-black text-white px-5 py-4">
          <div className="container-fluid">
            <div className="coloumn">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="text-left">
                  <small><span>Contact</span></small>
                </div>
                <div className="text-left">
                  <small><span>Bandung: +6287832943330 (Johan Agathon)</span></small>
                </div>
                <div className="text-left">
                  <small><span>Jakarta: +6287881305232 (Arinaldi)</span></small>
                </div>
                <div className="copyright text-right">
                  <small>&copy; <span>2023 Edumaitreya</span> .All rights Reserved ||
                <div className="credits" style={{ display: "inline" }}>
                {" "}Designed by Siraru Digital Solution
                </div></small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}