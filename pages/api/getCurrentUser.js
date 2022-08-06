import axios from "axios";

const getCurrentUser = async (req, res) => {
  try {
    const { userId } = req.query;
    const response = await axios.get(
      `${process.env.CLIENT_API_URL}/letscookinapps/users/${userId}`
    );
    res.status(200).send(response?.data);
  } catch (error) {
    const status = error?.response?.status
    const message = error?.response?.data || error?.response?.data?.message
    res.status(status).send(message)
}
};

export default getCurrentUser;
