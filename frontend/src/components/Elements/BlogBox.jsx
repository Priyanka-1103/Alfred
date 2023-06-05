import React from "react";
import styled from "styled-components";

export default function BlogBox({ title, text, ratings }) {
  return (
    <WrapperBtn className="animate pointer">
      <Wrapper className="whiteBg radius8 shadow">
        <h3 className="font20 extraBold">{title}</h3>
        {/* <span className="font13" style={{ padding: "30px 0", position: 'relative', top: '10px' }}> {ratings} </span> */}
        <p className="font13" style={{ padding: "30px 0" }}> {text} </p>
      </Wrapper>
    </WrapperBtn>
  );
}

const Wrapper = styled.div`
position: relative,
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;
const WrapperBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  :hover {
    opacity: 0.5;
  }
`;
