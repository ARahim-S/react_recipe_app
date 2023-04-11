import Form from "./Form";
import { HeaderContainer, HeaderText } from "./HeaderStyles";

const Header = ({
  setQuery,
  setMealTypes,
  getData,
  mealTypesArr,
  query,
  mealTypes,
}) => {
  return (
    <div>
      <HeaderContainer>
        <HeaderText>Food App</HeaderText>
        <Form
          setQuery={setQuery}
          setMealTypes={setMealTypes}
          getData={getData}
          mealTypesArr={mealTypesArr}
          query={query}
          mealTypes={mealTypes}
        />
      </HeaderContainer>
    </div>
  );
};

export default Header;
