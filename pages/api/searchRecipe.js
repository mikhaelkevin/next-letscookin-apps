import axios from "axios";

const searchRecipe = async (req, res) => {
  let { searchValue } = req.query;
  try {
    const response = await axios.get(
      `${process.env.API_URL}letscookinapps/recipes/search/${searchValue.trim()}`
    );
    res.status(200).json(response?.data);
  } catch (error) {
    const status = error?.response?.status;
    const message = error?.response?.data;
    res.status(status).json(message);
  }
};

export default searchRecipe;
