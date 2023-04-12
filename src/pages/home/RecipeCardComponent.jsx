import { useNavigate } from "react-router-dom";
import { Button, RecipeCard, RecipeHeader, RecipeImg } from "./HomeStyles";

const RecipeCardComponent = ({ item }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/details", { state: { item } });
  };
  return (
    <RecipeCard>
      <RecipeHeader>{item.label}</RecipeHeader>
      <RecipeImg src={item.image} alt={`${item.label}'s image`} />
      <Button onClick={handleClick}>Details</Button>
    </RecipeCard>
  );
};

export default RecipeCardComponent;
