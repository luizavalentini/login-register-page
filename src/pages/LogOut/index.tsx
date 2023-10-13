import { Container, Wrapper } from "./LogOut.Styled";
import LogoOut from "../../assets/Logo-10.svg";
import { Door } from "phosphor-react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const LogOut: React.FC = () => {
  const { Logout } = useContext(UserContext);
  return (
    <Container>
      <img src={LogoOut} alt="" />
      <Wrapper>
        <Door size={100} weight="bold" />
      </Wrapper>
      <button onClick={Logout}>LOGOUT</button>
    </Container>
  );
};
