import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 1%;
  padding-top: 2%;
  max-width: 600px;
  margin: 0 auto;
  align-items: center;
  margin-top: 10%;
  text-align: center;
  background-color: var(--white);
  border-radius: 20px;

  img {
    margin-top: 3%;
  }
  button {
    border-radius: 20px;
    width: 200px;
    height: 30px;
    background-color: var(--orange);
    border: none;
    font-size: 15px;
    font-weight: 700;
    color: var(--white);
    font-family: "Montserrat", sans-serif;
    margin-top: 5%;
    cursor: pointer;
    margin-left: 32%;
  }
`;

export const Wrapper = styled.div`
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  margin-right: 5%;
  justify-content: center;

  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 25px;
  }

  p {
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    margin-top: 1%;
    color: gray;
    opacity: 55%;
  }

  label {
    margin-top: 3%;
    text-align: start;
    font-size: 15px;
    font-weight: 700;
    color: gray;
    font-family: "Montserrat", sans-serif;
  }

  input {
    border-radius: 15px;
    margin-top: 2%;
    padding-top: 1.5%;
    padding-bottom: 1.5%;
    padding-left: 4%;
    font-size: 15px;
    border: 1px solid grey;
    color: grey;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
  }

  input::placeholder {
    color: grey;
    opacity: 35%;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const ForgetPassword = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: center;
  margin-top: 3%;

  button {
    width: 150px;
    height: 20px;
    padding-left: -30%;
    color: var(--orange);
    background-color: transparent;
    cursor: pointer;
  }

.link{
  padding-left: 2%;
  color: var(--orange);
  font-weight: bold;
  text-decoration: none;
}

  div {
    align-items: baseline;
    display: flex;
    justify-content: center;
  }

  p {
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    margin-top: 1%;
    color: gray;
    opacity: 55%;
  }
`;
