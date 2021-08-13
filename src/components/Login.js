import styled from "styled-components";
import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="disney-cta" />
          <SignUp to="/login">Get it all there</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="disney-cta" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  ${"" /* margin-bottom: 10vw; */}
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  flew-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto 2vw auto;
  transition: opacity 0.2s ease-out;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  color: #f9f9f9;
  font-weight: bold;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 15px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  margin-bottom: 20px;
  max-width: 600px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

export default Login;
