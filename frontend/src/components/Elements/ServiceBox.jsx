import React from "react";
import styled from "styled-components";
// Assets
import RollerIcon from "../../assets/svg/Services/RollerIcon";
import MonitorIcon from "../../assets/svg/Services/broom.png";
import BrowserIcon from "../../assets/svg/Services/electrician.png";
import PrinterIcon from "../../assets/svg/Services/insecticide.png";

export default function ServiceBox({icon, title , subtitle}) {
  let getIcon;

  switch (icon) {
    case "roller":
      getIcon = <RollerIcon />;
      break;
    case "cleaning":
      getIcon = <img src={MonitorIcon} alt="cleaning" style={{width : "65px"}} />;
      break;
    case "repair":
      getIcon = <img src={BrowserIcon} alt="cleaning" style={{width : "65px"}} />;
      break;
    case "pest":
      getIcon = <img src={PrinterIcon} alt="cleaning" style={{width : "65px"}} />;
      break;
    default:
      getIcon = <RollerIcon />;
      break;
  }


  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;