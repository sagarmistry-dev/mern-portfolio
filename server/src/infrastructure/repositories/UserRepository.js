const UserModel = require('../models/UserModel');

const UserRepository = {
  findByEmail: async (email) => {
    return UserModel.findOne({ email });
  },
  
  createUser: async (userData) => {
    const user = new UserModel(userData);
    return user.save();
  }
};

module.exports = UserRepository;
