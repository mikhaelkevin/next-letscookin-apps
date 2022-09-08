import axios from "axios";

const detailRecipe = async (req, res) => {
  try {
    const { id } = req.query;
    const response = await axios.post(
      `${process.env.CLIENT_API_URL}letscookinapps/recipes/detail/`,
      { id }
    );
    res.status(200).send(response?.data?.recipe);
  } catch (error) {
    const status = error?.response?.status;
    const message = error?.response?.data?.message || error?.response?.data;
    res.status(status).send(message);
  }
};

export default detailRecipe;
