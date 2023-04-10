import Form from "./Form";
import { HeaderContainer, HeaderText } from "./HeaderStyles";

const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <HeaderText>Food App</HeaderText>
        <Form />
      </HeaderContainer>
    </div>
  );
};

export default Header;
