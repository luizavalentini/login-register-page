
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IChildren, IUserLogin } from "../utils/interface";
import { api } from "../utils/api";
import nProgress from "nprogress";

export const UserContext = createContext({} as any);
export const UserProvider = ({ children }: IChildren) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string>(localStorage.getItem("token") || "");

  const Login = async (user: IUserLogin) => {
    try {
      nProgress.start();
      const { data } = await api.post("/auth", user);
      api.defaults.headers.common["Authorization"]  = token;
      localStorage.setItem("token", data);
      alert("seja bem-vindo(a)");
      navigate("/LogOut");
    } catch (error) {
      alert("Não encontrei nenhum usuário com esse nome ou senha!");
      nProgress.done();
    }
  }
  const addNewUser = async (addUser: IUserLogin) => {
    try {
      nProgress.start();
      await api.post("/auth/create", addUser);
      alert("Usuário criado com sucesso!");
      navigate("/");
    } catch (error) {
      alert("Ops, parece que esse usuário já existe!");
      console.error(error)
    } finally {
      nProgress.done();
    }
  }
  const Logout = async () => {
    localStorage.removeItem("token");
    api.defaults.headers.common["Authorization"] = undefined;
    setToken("");
    navigate("/");
  }
  return (
    <UserContext.Provider value={{ addNewUser, Login, Logout, token }}>
      {children}
    </UserContext.Provider>
  )
}
