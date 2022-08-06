import axios from "axios";

const detailRecipe = async (req, res) => {
  try {
    const { id } = req.query;
    const response = await axios.post(
      `${process.env.CLIENT_API_URL}/letscookinapps/recipes/detail/`,
      { id }
    );
    res.status(200).send(response?.data?.recipe);
  } catch (error) {
    console.log("api error :>> ", error);
  }
};

export default detailRecipe;
