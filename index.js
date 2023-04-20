import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get("/",(req,res) => {
    res.send("<h1>Hello from DevOps course <h1>");
})

const port = process.env.PORT;

app.listen(port , () => {
    console.log(`Server is running via port ${port}`);
})
  