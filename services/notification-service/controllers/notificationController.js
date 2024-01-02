const Notification = require("../models/notificationModel");

const sendNotificationController = async (req, res) => {
  try {
    const { sender, recipient, message, amount } = req.body;
    console.log("was in here");

    // Send the notification
    //sendNotification(recipient, message, amount);
    //sendNotification(sender, message, amount);

    await Notification.create({ recipient, message });
    await Notification.create({ recipient: sender, message });

    res.json({ status: "success", message: "Notification sent successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: "failed", message: "Internal Server Error" });
  }
};

module.exports = { sendNotification: sendNotificationController };
