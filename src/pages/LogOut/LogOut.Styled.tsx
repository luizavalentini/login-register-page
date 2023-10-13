import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 3%;
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
    width: 150px;
    height: 30px;
    background-color: var(--orange);
    border: none;
    font-size: 15px;
    font-weight: 700;
    color: var(--white);
    font-family: "Montserrat", sans-serif;
    margin-top: 5%;
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  margin-right: 5%;
  margin-left: 5%;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
