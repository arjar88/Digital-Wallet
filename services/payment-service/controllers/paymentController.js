const Payment = require("../models/paymentModel");
const axios = require("axios");

const transferMoney = async (req, res) => {
  const { senderUserName, receiverUserName, amount } = req.body;
  try {
    //fetch the user balances from the user service
    const rBalance = await axios.get(
      `http://localhost:3000/api/users/${receiverUserName}`
    );
    const sBalance = await axios.get(
      `http://localhost:3000/api/users/${senderUserName}`
    );

    //calculate new balances
    const [newSBalance, newRBalance] = [
      sBalance.data.balance - amount,
      rBalance.data.balance + amount,
    ];

    //update the user balances in the user endpoint
    await axios.put(`http://localhost:3000/api/users/update/`, {
      senderUserName,
      newSBalance,
      receiverUserName,
      newRBalance,
    });

    // Save the payment details
    await Payment.create({
      sender: senderUserName,
      recipient: receiverUserName,
      amount: amount,
      status: "success",
      timestamp: Date.now(),
    });

    // trigger notification api to send notification
    axios.post(`http://localhost:3002/api/notifications/sendNotification`, {
      sender: senderUserName,
      recipient: receiverUserName,
      amount,
      message: "money was transfered",
    });

    res.status(200).json({ message: "Money transferred successfully" });
  } catch (error) {
    await Payment.create({
      sender: senderUserName,
      recipient: receiverUserName,
      amount: amount,
      status: "failed",
      timestamp: Date.now(),
    });

    axios.post(`http://localhost:3002/api/notifications/sendNotification`, {
      sender: senderUserName,
      recipient: receiverUserName,
      amount,
      message: "money was not transfered",
    });
    console.error("Error in transferMoney:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  transferMoney,
};
