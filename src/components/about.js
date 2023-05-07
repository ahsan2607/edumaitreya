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

export default function AboutUs() {
  return (
    <div className="fitting-content" id="about">
      <div className="container" style={{ paddingTop: "8rem", paddingBottom: "3rem" }}>
        <div className="title-container" data-aos="fade-up">
          <h3 className="text-center fw-bold">"Pendidikan yang layak adalah hak anak"</h3>
        </div>
        <div className="row">
          <div className="col-md-10 py-5">
            <div className="card secondary-card" data-aos="fade-left">
              <div className="card-body">
                <p className="card-text center">Kami berkomitmen memberikan yang terbaik untuk memaksimalkan bakat, minat dan potensi anak melalui pendidikan yang menyenangkan dan relevan dengan perkembangan jaman.</p>
              </div>
            </div>
          </div>
          <div className="col-md-2" />
          <div className="col-md-2" />
          <div className="col-md-10 pb-5">
            <div className="card primary-card" data-aos="fade-right">
              <div className="card-body">
              <p className="card-text">Pendidikan yang relevan adalah pendidikan yang tidak hanya mengajarkan pengetahuan, menghafalkan informasi, dan/atau cekatan dalam menyelesaikan soal melainkan pendidikan yang mampu mendidik anak untuk memiliki ketrampilan yang dibutuhkan untuk bertahan dalam dunia yang berubah dengan cepat.</p>
                <p className="card-text">Ketrampilan ini meliputi: Pemikiran Kritis(Critical Thinking), Kreatifitas (Creativity), Komunikasi (Communication), dan Kolaborasi(Collaboration).</p>
              </div>
            </div>
          </div>
          <div className="col-md-10 py-5">
            <div className="card secondary-card" data-aos="fade-left">
              <div className="card-body">
                <p className="card-text center">Kesalahan dalam pendidikan anak usia dini dapat menghambat perkembangan anak dikemudian hari.</p>
              </div>
            </div>
          </div>
          <div className="col-md-2" />
          <div className="col-md-2" />
          <div className="col-md-10 pb-5">
            <div className="card primary-card" data-aos="fade-right">
              <div className="card-body">
                <p className="card-text">Pondasi adalah elemen penting yang memainkan peran kunci dalam menentukan kestabilan dan kekuatan bangunan. Pondasi yang kuat dan kokoh dapat mendukung struktur bangunan yang rumit dan berat untuk bertahan selama bertahun-tahun. Seperti halnya pondasi bangunan, pendidikan usia dini membangun dasar yang kokoh bagi anak-anak untuk mengembangkan potensi mereka di masa depan. Tanpa pondasi yang kokoh, anak-anak mungkin kesulitan untuk belajar dan berkembang di kemudian hari.</p>
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