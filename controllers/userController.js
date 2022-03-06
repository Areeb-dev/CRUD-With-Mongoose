const User = require("../models/User");

module.exports = {
  createUser: async (req, res) => {
    try {
      const addUser = new User({
        email: req.body.email,
        password: req.body.password,
      });
      await addUser.save();

      return res.status(201).send({
        statusCode: 201,
        success: true,
        message: "User Created",
      });
    } catch (error) {
      return res.status(500).send({
        statusCode: 500,
        success: false,
        message: "Server Error",
      });
    }
  },
  getUser: async (req, res) => {
    const findData = await User.find({});
    console.log(findData);

    try {
      return res.status(200).send({
        statusCode: 200,
        success: true,
        data: findData,
      });
    } catch (error) {
      return res.status(500).send({
        statusCode: 500,
        success: false,
        message: "Server Error",
      });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const id = req.params.id;
      await User.findByIdAndDelete(id);
      return res.status(201).send({
        statusCode: 200,
        success: true,
        message: "Delete User sucessfully",
      });
    } catch (error) {
      return res.status(500).send({
        statusCode: 500,
        success: false,
        message: "Server Error",
      });
    }
  },
  updateUser: async (req, res) => {
    try {
      const id = req.params.id;
      const { email, password } = req.body;
      console.log(id);
      console.log(email);
      await User.findByIdAndUpdate(id, req.body);
      return res.status(201).send({
        statusCode: 200,
        success: true,
        message: "Put User sucessfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        statusCode: 500,
        success: false,
        message: "Server Error",
      });
    }
  },
};
