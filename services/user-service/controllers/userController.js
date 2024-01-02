const User = require("../models/user");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserByName = async (req, res) => {
  const { userName } = req.params;
  try {
    const user = await User.findOne({ userName: userName });
    console.log(user);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  const { userName, balance } = req.body;
  try {
    await User.create({ userName: userName, balance: balance });
    res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBalance = async (req, res) => {
  const { senderUserName, newSBalance, receiverUserName, newRBalance } =
    req.body;
  try {
    // Update sender's balance
    await User.findOneAndUpdate(
      { userName: senderUserName },
      { balance: newSBalance },
      { new: true }
    );

    // Update receiver's balance
    await User.findOneAndUpdate(
      { userName: receiverUserName },
      { balance: newRBalance },
      { new: true }
    );

    res.status(200).json({ message: "Balances updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserByName,
  createUser,
  updateBalance,
};
