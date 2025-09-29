const app = require('./app'); // Import the configured app
const connectDB = require('./connectDB');
require("dotenv").config();

connectDB();

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
