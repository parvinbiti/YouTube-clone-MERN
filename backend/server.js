// const express = require("express");
// const router = require("./Router/router");
// const app = express();
// const path = require("path");
// const port = process.env.PORT || 3000;
// const bodyParser = require("body-parser");

// // Serve static files from the "public" directory
// app.use(express.static(path.join(__dirname, "public")));

// // Middlewares
// app.use(router);
// app.set("view engine", "hbs");
// app.set('views', path.join(__dirname, 'views'));
// app.use(bodyParser.urlencoded({ extended: true }));

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });



const express = require("express");
const router = require("./Router/router");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000; // ✅ Render এ কাজ করার জন্য
const bodyParser = require("body-parser");

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

// View engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// ✅ Default route
app.get("/", (req, res) => {
  res.send("✅ Backend is running successfully on Render 🚀");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
