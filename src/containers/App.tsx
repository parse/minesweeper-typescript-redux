import * as React from 'react';
import * as redux from 'redux';
import './App.css';
import { connect } from 'react-redux';

import { Game, StoreState } from './../types/';

import * as actions from '../redux/actions/';

import Status from './../components/Status';
import Cell from './../components/Cell';

const DEFAULT_OPTIONS = {
  mineCount: 10,
  width: 10,
  height: 10,
};

type StateProps = Game & {
  grid: string[][];
};

type DispatchProps = {
  flagLocation: typeof actions.flagLocation;
  revealLocation: typeof actions.revealLocation;
  resetGame: typeof actions.resetGame;
};

type Props = StateProps & DispatchProps;

class App extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.resetGame = this.resetGame.bind(this);
  }

  componentDidMount() {
    this.resetGame();
  }

  resetGame() {
    this.props.resetGame(DEFAULT_OPTIONS);
  }

  renderBoard() {
    const { grid, cellsByXy, revealLocation, flagLocation } = this.props;

    return (
      <div className="board">
        {grid.map((row, y) => (
          <div key={y} className="row">
            {row.map(xy => (
              <Cell
                {...cellsByXy[xy]}
                key={xy}
                onClick={() => revealLocation(xy)}
                onCtrlClick={() => flagLocation(xy)}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="root">
        <h1>ts-minesweeper</h1>
        <p>
          <code>click</code>: reveal; &nbsp;
          <code>ctrl + click</code>: flag / reveal
          <button onClick={this.resetGame}>restart</button>
        </p>
        {this.renderBoard()}
        <Status {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): StateProps => {
  const { width, height } = state.board;
  const grid: string[][] = [];
  for (let y = 0; y < height; y++) {
    grid[y] = [];
    for (let x = 0; x < width; x++) {
      grid[y][x] = [x, y].toString();
    }
  }

  return {
    ...state.board,
    grid,
  };
};

const mapDispatchToProps = (
  dispatch: redux.Dispatch<actions.GameAction>
): DispatchProps =>
  redux.bindActionCreators(
    {
      resetGame: actions.resetGame,
      revealLocation: actions.revealLocation,
      flagLocation: actions.flagLocation,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
