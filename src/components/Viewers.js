import styled from "styled-components";
import { viewData } from "../Data/ViewersData";

const Container = styled.div`
  margin-top: 50px;
  padding: 30px 0px 26px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 25px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
  }

  video {
    inset: 0px;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }
`;

const Viewers = (props) => {
  return (
    <Container>
      {viewData.map((view, index) => (
        <Wrap key={index}>
          <img src={view.src} alt={view.alt} />
          <video autoPlay={true} loop={true} playsInline={true} muted={true}>
            <source src={view.vdo} type="video/mp4" />
          </video>
        </Wrap>
      ))}
    </Container>
  );
};

export default Viewers;
