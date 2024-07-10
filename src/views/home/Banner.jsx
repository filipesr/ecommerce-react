import { ArrowRightOutlined } from "@ant-design/icons";
import { SHOP } from "@/constants/routes";
import bannerImg from "@/images/banner-ignite-01.webp";
import bannerMobileImg from "@/images/banner-ignite-01-mobile.webp";
import { Link } from "react-router-dom";

export const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-desc">
        {/* <h1 className="text-thin">
          YOUR
          <strong> LIFE</strong>, YOUR
          <strong> WAY</strong>
        </h1>
        <p>
          O estilo de vida saudável são inspirações para nossas criações, que
          ganham formas a partir das vivências fitness que se materializam
          dentro da estética streetwear, unindo moda, conforto e estilo.
        </p>
        <br /> */}
        <Link to={SHOP} className="button">
          Comprar &nbsp;
          <ArrowRightOutlined />
        </Link>
      </div>
      <div className="banner-img">
        <img src={bannerImg} alt="" className="img-large" />
        <img src={bannerMobileImg} alt="" className="img-mobile" />
      </div>
    </div>
  );
};
