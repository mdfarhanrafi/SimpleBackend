import "dotenv/config"

import express from 'express'
const app = express();
const port = process.env.PORT || 5001;

import router from "./routes/index.js";
app.use(express.json());
app.use (express.urlencoded({extended:false}))


app.get("/", (req, res) => {
    return res.json("hi everyone")
})


app.use(router);

app.listen(port, () => {
    console.log(`Hi i am listening on ${port}`);
})