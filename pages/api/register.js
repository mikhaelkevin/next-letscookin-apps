import axios from "axios";

const register = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const response = await axios.post(
      `${process.env.API_URL}/letscookinapps/users`,
      { name, email, password, phoneNumber: phone }
    );

    res.status(200).send(response?.data);
  } catch (error) {
    const status = error?.response?.status || 500;
    const message = error?.response?.data?.message;
    res.status(status).send(message);
  }
};

export default register;
