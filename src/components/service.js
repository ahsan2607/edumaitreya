import Brand from "./../images/logo/siraru.png";

// const sliderContainer = [...document.querySelectorAll('.img-slider-container')];
// const nextBtn = [...document.querySelectorAll('.next-slider')];
// const prevBtn = [...document.querySelectorAll('.prev-slider')];

// sliderContainer.forEach((item, i) => {
//   let containerDimension = item.getBoundingClientRect();
//   let containerwidth = (containerDimension.width) * 0.5;

//   nextBtn[i].addEventListener('click', () => {
//     item.scrollLeft += containerwidth;
//   });

//   prevBtn[i].addEventListener('click', () => {
//     item.scrollLeft -= containerwidth;
//   });
// });

export default function Service() {
  return (
    <div className="fitting-content" style={{ backgroundColor: "#eeeeee" }} id="services">
      <div className="container" style={{ paddingTop: "8rem", paddingBottom: "3rem" }}>
        <div className="title-container" data-aos="fade-up">
          <h3 className="text-center fw-bold">SERVICES</h3>
        </div>
        <div className="row py-4">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 py-3">
            <div className="card secondary-card" data-aos="zoom-in">
              <div className="card-body text-center">
                <div className="card-icon"></div>
                <h5 className="card-title fw-bold">Science & Math</h5>
                <p className="card-text">Edumaitreya menyediakan program pembelajaran dengan kerangka ajar STEM (Science, Technology, Engineering, and Math) yang menyenangkan dengan melibatkan eksperiment.</p>
                <p className="card-text">Melalui program ini anak anda akan didik untuk menjadi pribadi yang cerdas, kritis, dan serta memiliki kemampuan untuk melakukan observasi, analisis, pemecahan masalah dan penggunaan teknologi</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 py-3">
            <div className="card primary-card" data-aos="zoom-out">
              <div className="card-body text-center">
                <div className="card-icon"></div>
                <h5 className="card-title fw-bold">Languange</h5>
                <p className="card-text">Saat ini kami telah bekerjasama dengan beberapa guru profesional yang siap membimbing anak anda dalam penguasaan bahasa inggris, mandarin, dan jepang.</p>
                <p className="card-text">Bahasa asing tidak hanya membuka peluang dalam berkarir, tetapi juga membantu mengembangkan kemampuan komunikasi dan memahami budaya berbeda.</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 py-3">
            <div className="card secondary-card" data-aos="zoom-in">
              <div className="card-body text-center">
                <div className="card-icon"></div>
                <h5 className="card-title fw-bold">Social Science</h5>
                <p className="card-text">Edumaitreya menyediakan program pembelajaran dengan kerangka ajar Social Science bagi anak-anak yang tidak tertarik dengan topik-topik STEM tetapi lebih tertarik dengan fenomena sosial.</p>
                <p className="card-text">Belajar fenomena sosial dapat menjadi asik, menarik, dan bermanfaat bagi anak jika dikemas dalam bentuk diskusi, kerja kelompok, riset sosial, dan bermain peran. Belajar tidak lagi membosankan.</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="about-us">
          <div className="title-container" data-aos="fade-up">
            <h2 className="text-center fw-bold">TENTANG SIRARU</h2>
          </div>
          <div className="row row-center mt-5">
            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <h3 className="about-us-title fw-bold" data-aos="fade-right">KOMUNITAS SIRARU</h3>
              <p data-aos="fade-right">Siraru adalah komunitas yang melangkah menuju industri yang bergerak dalam bidang pengembangan diri.
                Komunitas Siraru berdiri sejak 26 Agustus 2022.
                Filosofi Siraru adalah hewan yang selalu mencari cahaya dan haus akan cahaya sampai dia terbakar.
                Maknanya kita manusia yang haus akan ilmu dan tidak pernah berhenti mencari ilmu pengetahuan.
              </p>
              <div data-aos="fade-right">
              <a href="#" className="btn btn-2 text-white mb-3">Pelajari sekarang</a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <h4 className="about-us-subtitle fw-bolder" data-aos="fade-left">VISI SIRARU</h4>
              <p data-aos="fade-left">Menjadi wadah dalam pengembangan karakter dan potensi setiap individu.
                Saling berkolaborasi dan mengembangkan media informasi untuk memberikan dampak positif pada lingkungan.</p>
              <h4 className="about-us-subtitle fw-bolder" data-aos="fade-left">MISI SIRARU</h4>
              <p data-aos="fade-left">Membuat program produktif yang melibatkan anggota untuk menggerakan roda perekonomian dari berbagai sektor.
                Membuat yayasan sebagai support system dan menjalin silaturahmi yang baik.
              </p>
            </div>
            <div className="col-md-12">
              <h5 className="text-center mt-4" data-aos="fade-up">Kami didukung oleh:</h5>
              <section className="img-slider mt-4" data-aos="fade-up">
                <button className="prev-slider h1 fw-bold" data-aos="fade-right">{"<"}</button>
                <button className="next-slider h1 fw-bold" data-aos="fade-left">{">"}</button>
                <div className="img-slider-container">
                  <div className="img-slider-card">
                    <img src={Brand} alt="" className="img-slider-image" />
                  </div>
                  <div className="img-slider-card">
                    <img src={Brand} alt="" className="img-slider-image" />
                  </div>
                  <div className="img-slider-card">
                    <img src={Brand} alt="" className="img-slider-image" />
                  </div>
                  <div className="img-slider-card">
                    <img src={Brand} alt="" className="img-slider-image" />
                  </div>
                  <div className="img-slider-card">
                    <img src={Brand} alt="" className="img-slider-image" />
                  </div>
                  <div className="img-slider-card">
                    <img src={Brand} alt="" className="img-slider-image" />
                  </div>
                  <div className="img-slider-card">
                    <img src={Brand} alt="" className="img-slider-image" />
                  </div>
                  <div className="img-slider-card">
                    <img src={Brand} alt="" className="img-slider-image" />
                  </div>
                  <div className="img-slider-card">
                    <img src={Brand} alt="" className="img-slider-image" />
                  </div>
                  <div className="img-slider-card">
                    <img src={Brand} alt="" className="img-slider-image" />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}