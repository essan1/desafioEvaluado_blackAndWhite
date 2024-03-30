import express from "express";
const app = express();
import router from "./routes/routes.js";
const PORT = process.env.PORT || 3015;

//middleware
app.use("/", router);

//static
app.use(express.static("assets"));

app.listen(PORT, () => {
  console.log(`servidor corriendo en http://localhost:${PORT}`);
});
