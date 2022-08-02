import axios from "axios";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await axios.post(
      `${process.env.API_URL}/letscookinapps/login/`,
      {
        email,
        password,
      }
    );

    res.status(200).send(response?.data);
  } catch (error) {
    const status = error?.response?.status;
    const message = error?.response?.data;
    res.status(status).send(message);
  }
};

export default login;
