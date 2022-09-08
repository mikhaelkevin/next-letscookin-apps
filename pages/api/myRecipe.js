import axios from "axios";

const myRecipe = async (req, res) => {
  try {
    const { userId, token } = req.body;
    const response = await axios.post(
      `${process.env.CLIENT_API_URL}letscookinapps/users/my-recipe`,
      { userId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.data;
    res.status(200).send(data);
  } catch (error) {
    const status = error?.response?.status || 500;
    const message = error?.response?.data?.message;
    res.status(status).send(message);
  }
};

export default myRecipe;
