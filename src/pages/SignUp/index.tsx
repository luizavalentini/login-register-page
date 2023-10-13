import { Container, Wrapper } from "./SignUp.Styled";
import Logo from "../../assets/Logo-9.svg";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { IUserLogin } from "../../utils/interface";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

export const SignUp: React.FC = () => {
  const { register, handleSubmit } = useForm<IUserLogin>();
  const {  addNewUser} = useContext(UserContext);

  return (
    <Container>
      <img src={Logo} alt="" />
      <Wrapper>
        <h1>SIGN UP</h1>
        <form onSubmit={handleSubmit((data) =>  addNewUser(data))}>
          <label htmlFor="nome">Insira seu E-mail:</label>
          <input
            required
            id="nome"
            {...register("login")}
            type="text"
            placeholder="Insira seu e-mail"
          />
          <label htmlFor="cpf">Insira sua senha:</label>
          <input
            required
            id="cpf"
            {...register("senha")}
            type="password"
            placeholder="Insira sua senha"
          ></input>
          <button type="submit">Cadastrar-me</button>
          <Link className="link" to="/">
            Voltar para a página de Login
          </Link>
        </form>
      </Wrapper>
    </Container>
  );
};
