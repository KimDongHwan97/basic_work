import express from 'express';
import PlayersRouter from "./routes/players.router.js";

const app = express()
const port = 3000

app.use(express.json());
app.use('/api', [PlayersRouter]);

app.listen(port, () => {
    console.log( port, '포트로 서버가 열렸어요!');
})