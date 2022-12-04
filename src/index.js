import express from "express";
import cors from "cors"

import pollRouter from "./routers/pollRouters.js"
import choiceRouter from "./routers/choiceRouters.js"
import voteRouter from "./routers/voteRouters.js"


const app = express();
app.use(express.json());
app.use(cors());
app.use(pollRouter);
app.use(choiceRouter);
app.use(voteRouter);


const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Running in port:${port}`));