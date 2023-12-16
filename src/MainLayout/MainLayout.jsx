import './MainLayout.css';


const MainLayout = () => {
  return (
    <div>


      <div>
        <div className="hero-img">
          <img src="https://i.ibb.co/DgnsmTB/Untitled-design.png" alt="" />
        </div>

        <div className="container">
          <div className="cols">
            <div className="col col-left">
              <div className="copy">
                <div className="header">editorial - 2023</div>
                <div className="sub-header">
                  a new collection of outdoor photograph
                </div>
                <div className="img-wrapper">
                  <img
                    src="https://i.ibb.co/6rp9DS3/Untitled-design.png"
                    alt=""
                  />
                </div>
                <div className="info">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt nihil reiciendis doloribus quisquam nobis provident
                  eos assumenda aperiam sed officiis.
                </div>
                <div className="footer">
                  <div className="footer-item">check social media</div>
                  <div className="footer-item"></div>
                  <div className="footer-item">get started</div>
                </div>
              </div>
            </div>
            <div className="col col-right"></div>
            <div className="header">
              Emotion <br />
              photo day <br />
              no.8
            </div>
          </div>
        </div>
        <nav>
          <div className="nav-items">
            <div className="nav-item">
              <a href="#">starting presentation</a>
            </div>
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <a href="#">collection</a>
            </div>
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <a href="#">amw-soon @copy;</a>
            </div>
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <a href="#">branding universal</a>
            </div>
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <a href="#">contact-model</a>
            </div>
          </div>
        </nav>
      </div>
      <div className="loader-text-wrapper block">
        <h1 className="loader-test">amw-soon</h1>
      </div>
      <div className="revealer"></div>
      <div className="pre-loader block">
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      </div>



    </div>
  );
};

export default MainLayout;
