const express = require('express');
const app = express();
import { minesweeper } from './minesweeper';

app.set('port', process.env.PORT || 3001);

app.post('/create', (req: any, res: any) => {
  const game = minesweeper.create({
    mineCount: 0,
    width: 1,
    height: 1,
  });

  res.json(game);
});

app.post('/reveal', (req: any, res: any) => {
  const xy = req.query.xy;
  const game = req.query.game;

  const newGame = minesweeper.reveal(xy, game);

  res.json(newGame);
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // tslint:disable-line
});
