export default function Footer(){
    return(
      <footer id="contact">
        <div className="footer-down bg-black text-white px-5 py-4">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="social-links float-end">
                  {/* logo link <a><i></i></a> */}
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="copyright text-center">
                  <small>&copy; <span>2023 Siraru Community</span> .All rights Reserved ||
                <div className="credits" style={{ display: "inline" }}>
                {" "}Designed by <a className="text-white list-unstyled" style={{ textDecoration: "none" }} href="https://github.com/ahsan2607">Ahsan</a><span> and</span><a className="text-white list-unstyled" style={{ textDecoration: "none" }} href="https://github.com/yagathon"> Johan</a>
                </div></small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}