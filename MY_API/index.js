const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); // parse JSON body

// Example endpoint
app.get("/hello", (req, res) => {
  res.json({ message: "Hello, world!" });
});

// Example with data
app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Alan" },
    { id: 2, name: "Anna" },
    { id: 3, name: "Adit"},
  ]);
});

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
