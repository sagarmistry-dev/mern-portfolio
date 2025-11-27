const loginUser = require("../../application/use-cases/loginUser");

const authController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const result = await loginUser({ email, password });

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};

module.exports = authController;
