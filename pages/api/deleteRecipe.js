import axios from "axios";

const deleteRecipe = async (req, res) => {
  try {
    const { recipeId, token } = req.query;
    const response = await axios.delete(
      `${process.env.CLIENT_API_URL}letscookinapps/recipes`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { id: recipeId },
      }
    );
    res.status(200).send(response?.data);
  } catch (error) {
    console.log("error", error);
    const status = error?.response?.status || 500;
    const message = error?.response?.data?.message;
    res.status(status).send(message);
  }
};

export default deleteRecipe;
