const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
require("dotenv").config();
const path = require("path"); // Import path module

const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use(notFound);
app.use(errorHandler);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



// Serve static files from the "uploads" directory

connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen("https://starlight-server.onrender.com", () => {
      console.log("Server is running");
    });
  })
  .catch((error) => {
    console.log(error);
  });
