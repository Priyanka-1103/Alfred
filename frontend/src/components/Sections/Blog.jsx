import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
// import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container" >
          <HeaderInfo>
            <h1 className="font40 extraBold">What We Provide</h1>
          </HeaderInfo>
          <div className="row textCenter" >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              <BlogBox
                title="Reliability"
                ratings="4.8"
                text="You can trust our team of professionals to arrive on time, complete tasks efficiently, and consistently deliver reliable services."
              />
              <BlogBox
                title="Quality Workmanship"
                ratings="4.8"
                text=" We take pride in our commitment to delivering high-quality workmanship, ensuring that every service we provide meets and exceeds customer expectations."
              />
              <BlogBox
                title="Excellent Customer Service"
                ratings="4.8"
                text="We prioritize customer satisfaction and strive to provide exceptional customer service at every step, listening to your needs and ensuring a positive experience."
              />
            </div>
          </div>
          <div className="row textCenter">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              <BlogBox
                title="Customized Solutions"
                ratings="4.8"
                text="We understand that every home is unique, which is why our professionals offer customized solutions tailored to your specific needs and preferences."
              />
              <BlogBox
                title="Transparent Pricing"
                ratings="4.8"
                text="We provide transparent and competitive pricing, ensuring that you have a clear understanding of the costs involved and no hidden surprises."
              />
              <BlogBox
                title="Licensed and Insured"
                ratings="4.8"
                text=" Our professionals are licensed, insured, and comply with industry regulations, providing you with peace of mind and protection throughout the service process."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg" style={{padding: '50px 0'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">What They Say?</h1>
          </HeaderInfo>
          <TestimonialSlider/>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;