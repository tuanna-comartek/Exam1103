import pic1 from "../../asset/images/item8.png";
import pic2 from "../../asset/images/item9.png";
import pic3 from "../../asset/images/sports-731506__340.png";

const HomePage = () => {
  return (
    <>
      <div className="container row section-1">
        <div className="row gx-lg-1">
          <div className="item-1 col-sm-12 col-md-12 col-lg-7">
            <div className="item-1-content">
              <img
                className="img-img"
                src={pic1}
                alt="a1"
                width="100%"
                height="auto"
                title="Comartek.com"
                loading="lazy"
              />
            </div>
          </div>
          <div className="item-2 col-sm-12 col-md-12 col-lg-5">
            <div className="row item-2-parent gx-lg-1 gy-lg-1">
              <div className="item-2-1 col-12 col-sm-12 col-sm-12 col-lg-12">
                <div className="item2-1-content">
                  <img
                    className="img-img"
                    src={pic3}
                    alt="z1"
                    width="100%"
                    height="auto"
                    title="Comartek.com"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 item-3">
                <div className="item-3-1">
                  <div className="item-3-1-content">
                    <img
                      className="img-img img-fluid"
                      src={pic2}
                      alt="w2"
                      width="100%"
                      height="auto"
                      title="Comartek.com"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 item-4">
                <div className="item-4-1">
                  <div className="item-4-1-content">
                    <img
                      className="img-img img-fluid"
                      src={pic3}
                      alt="e3"
                      width="100%"
                      height="auto"
                      title="Comartek.com"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
