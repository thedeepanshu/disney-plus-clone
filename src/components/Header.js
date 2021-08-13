import { Link } from "react-router-dom";
import styled from "styled-components";
import { links, logo } from "../Data/HeaderData";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import {
  selectUserName,
  setUserLoginDetails,
  selectUserPhoto,
  setSignOutState,
} from "../features/user/userSlice";
import { useEffect } from "react";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  width: 100%;
  padding: 0 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
`;

const Logo = styled(Link)`
  padding: 0;
  width: 80px;
  cursor: pointer;
  height: 100%;
  font-size: 0;
  display: flex;
  justify-content: start;
  align-items: center;
  img {
    display: block;
    width: 80px;
  }
`;

const NavMenu = styled.div`
  flex: 1;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-flow: row no-wrap;
  height: 100%;
  position: relative;
  margin: 0 25px 0 25px;
  padding: 0;
  @media screen and (max-width: 950px) {
    display: none;
  }
`;

const MenuLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-cotent: center;
  position: relative;
  margin-left: 20px;
  img {
    height: 20px;
    min-width: 20px;
    width: 20px;
    z-index: auto;
  }
  span {
    color: rgb(249, 249, 249);
    font-size: 14px;
    letter-spacing: 1.42px;
    line-height: 1.08;
    pading: 2px 0;
    white-space: no-wrap;
    position: relative;
    margin-left: 5px;
    text-transform: uppercase;
    &:before {
      content: "";
      position: absolute;
      border-radius: 0px 0px 4px 4px;
      bottom: -6px;
      left: 0;
      width: auto;
      height: 2px;
      background: rgb(249, 249, 249);
      width: 0;
      opacity: 0;
      transition: all 0.3s ease;
    }
  }
  &:hover {
    span:before {
      width: 100%;
      opacity: 1;
    }
  }
`;

const Login = styled(Link)`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 7px 16px;
  text-transform: uppercase;
  color: #f9f9f9;
  border-radius: 4px;
  border: 1px solid #f9f9f9;
  text-align: center;
  line-height: 1.4;
  letter-spacing: 1.5px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border: 1px solid transparent;
  }
`;

const UserImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 150px;
  right: 0;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 8px;
  font-size: 13px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  visibility: hidden;
  pointer-events: none;

  &:hover {
    background: #f9f9f9;
    color: rgb(19, 19, 19);
  }
`;

const SignOut = styled.div`
  position: relative;
  height: 40px;
  width: 40px;
  border-radius: 50%;

  &:hover {
    ${DropDown} {
      opacity: 1;
      top: 100%;
      visibility: visible;
      pointer-events: all;
    }
  }
`;

const Header = (props) => {
  const dispath = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((err) => {
          alert(err.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispath(setSignOutState());
          history.push("/");
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  const setUser = (user) => {
    dispath(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo to={logo.to}>
        <img src={logo.img} alt={logo.alt} />
      </Logo>
      {!userName ? (
        <Login to="/" onClick={handleAuth}>
          Login
        </Login>
      ) : (
        <>
          <NavMenu>
            {links.map((item, index) => (
              <MenuLink to={item.to} key={index}>
                <img src={item.img} alt={item.alt} />
                <span>{item.title}</span>
              </MenuLink>
            ))}
          </NavMenu>
          <SignOut>
            <UserImage src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

export default Header;
