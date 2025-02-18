const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.get("/", (req, res) => {
  res.json("Server running from 🚀 Docker");
});
app.get("/api", (req, res) => {
  res.json({ name: "jeevan" });
});
const PORT = 7000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
