import {
  Game,
  CellStatus,
  Cell,
} from './../../types/index';

export const isVictorious = (game: Game) => {
  const unknownCells = Object.keys(game.cellsByXy)
    .filter((xy) => !isCellKnown(game.cellsByXy[xy]));
  return (unknownCells.length === game.mineCount);
};

const isCellKnown = ({ status }: Cell) =>
  (status === CellStatus.Revealed || status === CellStatus.Exploded);
