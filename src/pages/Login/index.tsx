import { Container, ForgetPassword, Wrapper } from "./Login.Styled";
import Logo from "../../assets/Logo-7.svg";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { IUserLogin } from "../../utils/interface";
import { UserContext } from "../../context/UserContext";
import { Link, Navigate } from "react-router-dom";

export const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<IUserLogin>();
  const { Login } = useContext(UserContext);

  return (
    <Container>
      <img src={Logo} alt="" />
      <Wrapper>
        <h1>SIGN IN</h1>
        <p>Entre com os seus dados para acessar a sua conta</p>
        <form onSubmit={handleSubmit((data) => Login(data))}>
          <label htmlFor="nome">Email:</label>
          <input
            required
            id="nome"
            {...register("login")}
            type="text"
            placeholder="Insira seu e-mail"
          />
          <label htmlFor="cpf">Senha:</label>
          <input
            required
            id="senha"
            {...register("senha")}
            type="password"
            placeholder="Insira sua senha"
          ></input>
          <ForgetPassword>
            <p>Esqueceu a senha?</p>
            <Link className="link" to="/">
              Redefinir Senha
            </Link>
          </ForgetPassword>
          <button type="submit">Entrar</button>
        </form>
      </Wrapper>
      <ForgetPassword>
        <p>Não tem conta?</p>
        <Link className="link" to="/SignUp">
          Cadastre-se aqui
        </Link>
      </ForgetPassword>
    </Container>
  );
};
