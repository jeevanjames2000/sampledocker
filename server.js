const express = require("express");
const cors = require("cors");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

async function fetchAndSaveCSV() {
  try {
    const response = await axios.get(API_URL);
    const data = response.data;

    if (!Array.isArray(data)) {
      console.error("Expected an array but got:", typeof data);
      return;
    }
    const headers = Object.keys(data[0]).join(",") + "\n";
    const rows = data.map((row) => Object.values(row).join(",")).join("\n");

    const csvContent = headers + rows;
    const filePath = path.join(__dirname, "output.csv");
    fs.writeFileSync(filePath, csvContent);
    console.log(`✅ Data saved to ${filePath}`);
  } catch (error) {
    console.error("❌ Error fetching API data:", error.message);
  }
}

fetchAndSaveCSV();
app.get("/", (req, res) => {
  res.json("Server running from 🚀 Docker");
});
app.get("/api", (req, res) => {
  res.json({ name: "jeevan test deploy" });
});
const PORT = 7000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
