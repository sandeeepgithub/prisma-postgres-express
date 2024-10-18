const express = require("express");
const userRouter = require("./routes/user");
const postRouter = require("./routes/post");
const favouriteRouter = require("./routes/favourite");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.get("/api/v1/test", (req, res) => res.send("Working..."));

app.use("/api/v1/user", userRouter);
app.use("/api/v1/post", postRouter);
app.use("/api/v1/favourite", favouriteRouter);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

app.use((err, req, res, next) => {
  console.log(err);

  res.status(400).json({
    error: err.meta.cause,
  });
});
