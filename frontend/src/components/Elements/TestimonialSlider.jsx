import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text=" I recently used Alfred Home Services to have my carpets cleaned and I was very impressed with the quality of their service"
            author="Ralph Waldo Emerson"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="I highly recommend Alfred Home Services for anyone looking for reliable and high-quality home services."
            author="Ava Davis"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="I've used Alfred Home Services for several different projects around my house, including plumbing and electrical work, and I have to say I'm very impressed with their level of service."
            author="Daniel Hall"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="I would definitely use Alfred Home Services again and highly recommend them to anyone in need of roofing repair or maintenance."
            author="Amelia Scott"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."
            author="Ralph Waldo Emerson"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."
            author="Ralph Waldo Emerson"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="I would definitely use Alfred Home Services again and highly recommend them to anyone in need of roofing repair or maintenance."
            author="Amelia Scott"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."
            author="Ralph Waldo Emerson"
          />
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
