import React, { useState } from "react";
import Header from "../../components/header/Header";
import axios from "axios";
import { HomeImg, ImgDiv, MainContainer } from "./HomeStyles";
import Cook from "../../assets/cook.png";
import RecipeCardComponent from "./RecipeCardComponent";

const Home = () => {
  const [query, setQuery] = useState("");
  const mealTypesArr = ["Breakfast", "Lunch", "Snack", "Teatime", "Dinner"];
  const [mealTypes, setMealTypes] = useState(
    mealTypesArr[0].toLocaleLowerCase()
  );
  const [food, setFood] = useState();

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_APP_KEY}&mealType=${mealTypes}&imageSize=REGULAR`;

  const getData = async () => {
    if (query) {
      const result = await axios.get(url);
      setFood(result.data.hits);
      console.log(result.data.hits);
    }
  };
  return (
    <div>
      <Header
        setQuery={setQuery}
        setMealTypes={setMealTypes}
        getData={getData}
        mealTypesArr={mealTypesArr}
        query={query}
        mealTypes={mealTypes}
      />

      {food ? (
        <MainContainer>
          {food.map((item, index) => (
            <RecipeCardComponent key={index} item={item.recipe} />
          ))}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={Cook} />
        </ImgDiv>
      )}
    </div>
  );
};

export default Home;
