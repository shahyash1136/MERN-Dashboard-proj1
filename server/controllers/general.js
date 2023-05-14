import User from "../models/User.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    const userData = await User.findById(id);
    res.status(200).json(userData);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
