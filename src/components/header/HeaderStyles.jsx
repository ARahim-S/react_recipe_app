import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: aqua;
`;

export const HeaderText = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`;

export const FormContainer = styled.form`
  width: 75%;
  max-width: 50rem;
  border: 2px solid white;
  background: #ece3e5;
  display: flex;
  justify-content: center;
  margin: 0.5rem auto;
  padding: 0.5em;
`;

export const FoodInput = styled.input`
  width: 25%;
  padding: 0.3rem;
`;
export const Button = styled.button`
  width: 25%;
  padding: 0.3rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  margin: 0%.5rem;
  background: #b63434;
  color: white;
  font-weight: bold;
`;

export const Select = styled.select`
  width: 25%;
`;
