import { useLocation } from "react-router-dom";

import {
  DetailContainer,
  DetailPart,
  HeaderContainer,
  ImgContainer,
  IngredientContainer,
  OtherPart,
} from "./DetailsStyles";

const Details = () => {
  const location = useLocation();
  const recipe = location.state.item;
  console.log(recipe);
  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{recipe.label}</h1>
      </HeaderContainer>
      <DetailPart>
        <OtherPart>
          <h3>Nutrients</h3>
          <p>Cal: {Math.round(`${recipe.calories}`)}</p>
          <p>Total Weight: {Math.round(`${recipe.totalWeight}`)}</p>
          {recipe.dishType.slice(0, 1).map((item, index) => (
            <p key={index}>Dish Types: {item}</p>
          ))}

          {recipe.digest.slice(0, 4).map((item, index) => (
            <p key={index}>
              {item.label}: {Math.round(item.total)}
            </p>
          ))}
        </OtherPart>
        <ImgContainer>
          <img src={recipe.image} alt={recipe.label} />
        </ImgContainer>
        <IngredientContainer>
          <h3>Ingredients</h3>
          {recipe.ingredientLines.map((ing, index) => (
            <p key={index}>
              {index + 1}: {ing}
            </p>
          ))}
        </IngredientContainer>
      </DetailPart>
    </DetailContainer>
  );
};

export default Details;
