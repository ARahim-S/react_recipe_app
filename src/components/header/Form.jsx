import { Button, FoodInput, FormContainer, Select } from "./HeaderStyles";

const Form = ({
  setQuery,
  setMealTypes,
  getData,
  mealTypesArr,
  query,
  mealTypes,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
    setQuery("");
    setMealTypes("");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FoodInput
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit">Search</Button>
      <Select
        name="mealTypes"
        id="mealTypes"
        onChange={(e) => setMealTypes(e.target.value)}
        value={mealTypes}
      >
        {mealTypesArr.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </Select>
    </FormContainer>
  );
};

export default Form;
