import axios from "axios";

export default async function newRecipe(req, res) {
  const response = await axios.get(
    "http://letscookin-app.herokuapp.com/letscookinapps/recipes/new-recipe/"
  );

  const data = response?.data;

  res.status(200).json(data);
}
