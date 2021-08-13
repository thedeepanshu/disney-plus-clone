import styled from "styled-components";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { sliderData } from "../Data/ImgSliderData";

const Carousel = styled(Slider)`
  margin-top: 20px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  position: relative;
  cursor: pointer;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    display: block;
    position: relative;
    padding: 4px;
    border: 4px solid transparent;
    transition: all 200ms ease-in-out;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border-color: rgba(249, 249, 249, 0.8);
      transform: scale(0.95);
    }
  }
`;

const ImgSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <Carousel {...settings}>
        {sliderData.map((slide, index) => (
          <Wrap key={index}>
            <Link to='/home'>
              <img src={slide.src} alt={slide.alt} />
            </Link>
          </Wrap>
        ))}
      </Carousel>
    </>
  );
};

export default ImgSlider;
