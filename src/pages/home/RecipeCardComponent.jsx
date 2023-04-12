import { Button, RecipeCard, RecipeHeader, RecipeImg } from "./HomeStyles";

const RecipeCardComponent = ({ item }) => {
  return (
    <RecipeCard>
      <RecipeHeader>{item.label}</RecipeHeader>
      <RecipeImg src={item.image} alt={`${item.label}'s image`} />
      <Button>Details</Button>
    </RecipeCard>
  );
};

export default RecipeCardComponent;
