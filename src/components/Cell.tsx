import * as React from 'react';

import {
  Cell as CellType,
  CellStatus
 } from './../types/index';

import './Cell.css';

type CellProps = CellType & {
  onClick(): void
  onCtrlClick(): void
};

class Cell extends React.Component<CellProps> {
  constructor(props: CellProps) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (e.ctrlKey) {
      this.props.onCtrlClick();
    } else {
      this.props.onClick();
    }
  }

  render() {
    const {
      status,
      revealedCount,
    } = this.props;

    let icon = <i>.</i>;
    let className = 'cell';
    if (status === CellStatus.Exploded) {
      icon = <i className="fa fa-bomb" />;
      className += ' cell--exploded';
    } else if (status === CellStatus.Revealed) {
      icon = <i>{revealedCount > 0 ? revealedCount.toString() : '.'}</i>;
      className += ` cell--revealed cell--revealed-${revealedCount}`;
    } else if (status === CellStatus.Flagged) {
      icon = <i className="fa fa-flag" />;
      className += ' cell--flagged';
    }

    return (
      <button
        className={className}
        onClick={this.onClick}
      >
        {icon}
      </button>
    );
  }
}

export default Cell;
