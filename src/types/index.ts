export enum CellStatus {
  Unknown = 0,
  Revealed,
  Flagged,
  Exploded,
}

export type Options = {
  mineCount: number;
  width: number;
  height: number;
};

export type Cell = {
  status: CellStatus;
  revealedCount: number;
};

export type Board = {
  cellsByXy: { [xy: string]: Cell };
  neighborsByXy: { [xy: string]: string[] };
  minesByXy: { [xy: string]: true };
};

export enum GameStatus {
  Started = 0,
  Won,
  Lost,
}

export type Game = Options &
  Board & {
    status: GameStatus;
    moveCount: number;
  };

export type MinesweeperAPI = {
  create(options: Options): Game;
  reveal(prev: Game, xy: string): Game;
  flag(prev: Game, xy: string): Game;
};

export interface StoreState {
  readonly board: Game;
}
