const express = require("express");
const app = express();
const cors = require("cors");

// Use CORS if frontend and backend are on different ports
app.use(cors());

const betsRouter = require("./routes/bets");

app.use("/api/bets", betsRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
