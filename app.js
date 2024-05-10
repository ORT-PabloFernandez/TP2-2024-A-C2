import express from "express";
import inventorsRouter from "./routes/inventors.js";
const PORT = 3000;
const app = express();
app.use(express.json());

app.use("/inventors", inventorsRouter);

app.listen(PORT, () => {
  console.log("El servidor esta levantado en el puerto: ", PORT);
});
