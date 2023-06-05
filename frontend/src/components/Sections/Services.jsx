import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
import { Link } from "react-scroll";
// Assets
import AddImageNew from "../../assets/img/services/interior.jpg";
// Assets
import AddImage1 from "../../assets/img/services/carpenter.jpg";
import AddImage2 from "../../assets/img/services/painthand.jpg";
import AddImage3 from "../../assets/img/services/cleaning.jpg";
import AddImage4 from "../../assets/img/services/repair-tools.jpg";

import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();
  const goToHomeService = () => {
    navigate('/homeService');
  }
  const goToCleaning = () => {
    navigate('/cleaning');
  }
  const goToRepair = () => {
    navigate('/repair');
  }


  return (
    <Wrapper id="services">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Awesome Services</h1>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper onClick = {goToHomeService} style={{cursor:"pointer"}}>
              <ServiceBox
                icon="roller"
                title="Home Improvement"
              />
            </ServiceBoxWrapper>

            <ServiceBoxWrapper onClick = {goToCleaning} style={{cursor:"pointer"}}>
              <ServiceBox
                icon="cleaning"
                title="Cleaning Services"
              />
            </ServiceBoxWrapper>

            <ServiceBoxWrapper onClick = {goToRepair} style={{cursor:"pointer"}}>
              <ServiceBox
                icon="repair"
                title="Repairs and Maintenance"
              />
            </ServiceBoxWrapper>
            
            <ServiceBoxWrapper>
              <ServiceBox icon="pest" title="Pest Control Services"                 
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font15 semiBold">From repairs to renovations, we've got your home covered</h4>
                <h2 className="font35 extraBold">Alfred provides you a seamless service</h2>
                <p className="font20">
                   Quality craftsmanship and exceptional customer service for your home, always.
                </p>
                <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0"}}>
                  <div style={{ width: "190px", marginLeft: "15%" }}>
                  <Link activeClass="active"  to="contact" spy={true} smooth={true}>
                     <FullButton title="Contact Us"  border />
                  </Link>
                  </div>
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} alt="office" style={{width : "310px", height : "400px" }}/>
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage2} alt="office" style={{width : "197px", height : "333px" }}/>
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={AddImage3} alt="office" style={{width : "112px", height : "125px" }}/>
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={AddImage4} alt="office" style={{width : "197px", height : "224px" }}/>
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>

      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeftNew>
              <AddLeftInnerNew>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImageNew} alt="add" style={{width : "426px", height : "590px" }}/>
                </ImgWrapper>
              </AddLeftInnerNew>
            </AddLeftNew>
            <AddRightNew>
              <h4 className="font30 semiBold" style={{textAlign : "center"}}>New Category Launches : </h4>
              <h2 className="font40 extraBold" style={{textAlign : "center"}}>Interior Designing</h2>
              <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                <div style={{ width: "190px", marginLeft: "18%"}}>
                <Link activeClass="active" to="pricing" spy={true} smooth={true}>
                   <FullButton title="See Price" />
                </Link>
                </div>
                <div style={{ width: "190px", marginLeft: "15px" }}>
                <Link activeClass="active" to="contact" spy={true} smooth={true}>
                  <FullButton title="Contact Us" border />
                </Link>
                </div>
              </ButtonsRow>
            </AddRightNew>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;


const AddLeftNew = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddLeftInnerNew = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const AddRightNew = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;