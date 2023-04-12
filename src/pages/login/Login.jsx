import {
  FormContainer,
  LoginContainer,
  LoginHeader,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyles";
import meal from "../../assets/meal.svg";

const user = {
  username: "user",
};

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(user));
    window.location.href = "/home";
  };
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} alt="meal logo image" />
        <LoginHeader>{"<Recipe>"}Best</LoginHeader>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" placeholder="username" required />
          <StyledInput type="password" placeholder="password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
