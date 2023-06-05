import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Assets
import ClientLogo01 from "../../assets/img/services/logos/mop.png"
import ClientLogo02 from "../../assets/img/services/logos/plumber-working.png";
import ClientLogo03 from "../../assets/img/services/logos/electrician.png";
import ClientLogo04 from "../../assets/img/services/logos/bug.png";
import ClientLogo05 from "../../assets/img/services/logos/paint-roller.png";
import ClientLogo06 from "../../assets/img/services/logos/hacksaw.png";

export default function ClientSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo01} alt="client logo" style={{height : "140px"}} />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo02} alt="client logo" style={{height : "130px"}} />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo03} alt="client logo" style={{height : "140px"}}/>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo04} alt="client logo" style={{height : "130px"}} />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo05} alt="client logo"style={{height : "130px"}} />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo06} alt="client logo" style={{height : "140px"}} />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo03} alt="client logo" style={{height : "140px"}} />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo04} alt="client logo" style={{height : "130px"}} />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo01} alt="client logo" style={{height : "140px"}}/>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo02} alt="client logo" style={{height : "130px"}}/>
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 100%;
  height: 100px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  padding: 10%;
`;