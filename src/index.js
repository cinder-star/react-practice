import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      square: Array(9).fill(null),
      turn: 0,
      currentStatus: "X",
    };
  }

  handleClick(i) {
    const square = this.state.square.slice();
    const turn = this.state.turn
    let currentStatus = this.state.currentStatus;
    if (square[i] === null) {
      if (turn%2 === 0) {
        square[i] = "X";
        currentStatus = "O";
      } else {
        square[i] = "O";
        currentStatus = "X";
      }
      this.setState({
        square: square,
        turn: turn+1,
        currentStatus: currentStatus,
      });
    }
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.square[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = "Next player: ";

    return (
      <div>
        <div className="status">{status+this.state.currentStatus}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
