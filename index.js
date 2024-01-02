const { spawn } = require("child_process");
const services = [
  { name: "User Service", path: "services/user-service/app.js" },
  { name: "Payment Service", path: "services/payment-service/app.js" },
  {
    name: "Notification Service",
    path: "services/notification-service/app.js",
  },
];

// Function to start a service
const startService = ({ name, path }) => {
  console.log(`Starting ${name}...`);
  const serviceProcess = spawn("node", [path]);

  serviceProcess.stdout.on("data", (data) => {
    console.log(`${name} stdout: ${data}`);
  });

  serviceProcess.stderr.on("data", (data) => {
    console.error(`${name} stderr: ${data}`);
  });

  serviceProcess.on("close", (code) => {
    console.log(`${name} exited with code ${code}`);
  });
};

// Start each service
services.forEach(startService);
