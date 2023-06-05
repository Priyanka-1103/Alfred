import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import RollerIcon from "../../assets/svg/Services/RollerIcon";
import CleaningIcon from "../../assets/svg/Services/broom.png";
import ElectricIcon from "../../assets/svg/Services/electrician.png";
import PestIcon from "../../assets/svg/Services/insecticide.png";
import ACIcon from "../../assets/svg/Services/ac.png";
import RepairIcon from "../../assets/svg/Services/repair.png";
import PlumberIcon from "../../assets/svg/Services/plumber.png";
import CarpenterIcon from "../../assets/svg/Services/carpenter.png";
import IntIcon from "../../assets/svg/Services/int.png";
import CeilingIcon from "../../assets/svg/Services/ceiling.png";
import MoversIcon from "../../assets/svg/Services/movers.png";
import CheckMark from "../../assets/svg/Checkmark";
import { useNavigate } from "react-router-dom";

export default function PricingTable({ icon, price, title, text,  offers, action }) {
  let getIcon;

  switch (icon) {
    case "roller":
      getIcon = <RollerIcon />;
      break;
    case "cleaning":
      getIcon = <img src={CleaningIcon} alt="cleaning" style={{width : "65px"}}/>;
      break;
      case "ac":
        getIcon = <img src={ACIcon} alt="ac" style={{width : "65px"}}/>;
        break;
      case "repair":
        getIcon = <img src={RepairIcon} alt="repair" style={{width : "65px"}}/>;
        break;
      case "pest":
        getIcon = <img src={PestIcon} alt="pest" style={{width : "65px"}}/>;
        break;
      case "electric":
        getIcon = <img src={ElectricIcon} alt="electric" style={{width : "65px"}}/>;
        break;
      case "plumber":
        getIcon = <img src={PlumberIcon} alt="plumber" style={{width : "65px"}}/>;
        break;
      case "carpenter":
        getIcon = <img src={CarpenterIcon} alt="carpenter" style={{width : "65px"}}/>;
        break;
      case "interior":
        getIcon = <img src={IntIcon} alt="interior" style={{width : "65px"}}/>;
        break;
      case "ceiling":
          getIcon = <img src={CeilingIcon} alt="ceiling" style={{width : "65px"}}/>;
          break;
      case "movers":
        getIcon = <img src={MoversIcon} alt="movers" style={{width : "65px"}}/>;
        break;
    default:
      getIcon = <RollerIcon />;
      break;
  }



  const navigate = useNavigate();
  const goToPayment = () => {
    navigate('/payment');
  }
  const goToLogin = () => {
    navigate('/login');
  }



  return (
    <Wrapper className="whiteBg radius8 shadow">
      <div className="flexSpaceCenter">
        {getIcon}
        <p className="font30 extraBold">{price}</p>
      </div>
      <div style={{ margin: "30px 0" }}>
        <h4 className="font30 extraBold">{title}</h4>
        <p className="font13">{text}</p>
      </div>
      <div>
        {offers
          ? offers.map((item, index) => (
              <div className="flexNullCenter" style={{ margin: "15px 0" }} key={index}>
                <div style={{ position: "relative", top: "-1px", marginRight: "15px" }}>
                  {item.cheked ? (
                    <div style={{ minWidth: "20px" }}>
                      <CheckMark />
                    </div>
                  ) : (
                    <div style={{ minWidth: "20px" }}></div>
                  )}
                </div>
                <p className="font20 extraBold">{item.name}</p>
              </div>
            ))
          : null}
      </div>
      <div style={{ maxWidth: "120px", margin: "20px auto 0 auto" }} onClick={goToPayment}>
        <FullButton title="Book now" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;
