import axios from "axios";

const comment = async (req, res) => {
  try {
    const { recipeId, userId, newComment, token } = req.query;
    const response = await axios.post(
      `${process.env.CLIENT_API_URL}letscookinapps/recipes/comment`,
      {
        recipeId,
        userId,
        comment: newComment,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    res.status(200).send(response?.data?.message);
  } catch (error) {
    const status = error?.response?.status || 500;
    const message =
      error?.response?.data?.message ||
      error?.response?.data ||
      "Something went wrong on the API";

    res.status(status).send(message);
  }
};

module.exports = comment;
