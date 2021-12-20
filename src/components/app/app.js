import React, { Component } from "react";

import "./app.css";

export default class App extends Component {
  state = {
    blocks: Array(9).fill(null),
    count: 0,
    text: "",
    countText: 0,
    gameCountO: 0,
    gameCountX: 0,
    drawCount: 0,
  };
  arrPob = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  isWinner = (el) => {
    for (let i = 0; i < 8; i++) {
      let arrEl = this.arrPob[i];
      if (
        this.state.blocks[arrEl[0]] === el &&
        this.state.blocks[arrEl[1]] === el &&
        this.state.blocks[arrEl[2]] === el
      ) {
        if (el === "X") {
          this.setState({
            text: "Победа X",
            gameCountX: this.state.gameCountX + 1,
            countText: 1,
            drawCount: 0,
          });
        }
        if (el === "O") {
          this.setState({
            text: "Победа O",
            gameCountO: this.state.gameCountO + 1,
            countText: 1,
            drawCount: 0,
          });
        }
        setTimeout(() => {
          this.setState({
            blocks: Array(9).fill(null),
            count: 0,
            countText: 0,
            drawCount: 0,
          });
        }, 4000);
      }
    }
    if (this.state.drawCount === 8) {
      this.setState({
        drawCount: 0,
        text: "Ничья",
        countText: 2,
      });
      setTimeout(() => {
        this.setState({
          blocks: Array(9).fill(null),
          count: 0,
          countText: 0,
          drawCount: 0,
        });
      }, 4000);
    }
  };
  onBlockClick = (e) => {
    let block = e.target.getAttribute("data");
    let current = this.state.blocks;
    if (current[block] === null) {
      current[block] = this.state.count % 2 === 0 ? "X" : "O";
      this.setState({
        block: current,
        count: this.state.count + 1,
        drawCount: this.state.drawCount + 1,
      });
      this.isWinner(current[block]);
    }
  };
  onReset = () => {
    this.setState({
      blocks: Array(9).fill(null),
      count: 0,
      countText: 0,
      gameCountO: 0,
      gameCountX: 0,
      drawCount: 0,
    });
  };

  render() {
    const countBlock = this.state.blocks;
    let clazz = "centerBlock";
    let classes = "text dsipl";
    if (this.state.countText === 1) {
      classes = "text";
    } else if (this.state.countText === 2) {
      classes = "text2";
    } else {
      classes = "text dsipl";
    }
    return (
      <div>
        <div className={classes}>{this.state.text}</div>
        <div className="pos">Wins O: {this.state.gameCountO}</div>
        <div className="pos1">{this.state.gameCountX} :Wins X</div>
        <div className="pole">
          <div className="blocks" onClick={this.onBlockClick} data="0">
            <div className={clazz}>{countBlock[0]}</div>
          </div>
          <div className="blocks" onClick={this.onBlockClick} data="1">
            <div className={clazz}>{countBlock[1]}</div>
          </div>
          <div className="blocks" onClick={this.onBlockClick} data="2">
            <div className={clazz}>{countBlock[2]}</div>
          </div>
          <div className="blocks" onClick={this.onBlockClick} data="3">
            <div className={clazz}>{countBlock[3]}</div>
          </div>
          <div className="blocks" onClick={this.onBlockClick} data="4">
            <div className={clazz}>{countBlock[4]}</div>
          </div>
          <div className="blocks" onClick={this.onBlockClick} data="5">
            <div className={clazz}>{countBlock[5]}</div>
          </div>
          <div className="blocks" onClick={this.onBlockClick} data="6">
            <div className={clazz}>{countBlock[6]}</div>
          </div>
          <div className="blocks" onClick={this.onBlockClick} data="7">
            <div className={clazz}>{countBlock[7]}</div>
          </div>
          <div className="blocks" onClick={this.onBlockClick} data="8">
            <div className={clazz}>{countBlock[8]}</div>
          </div>
          <button
            type="button"
            onClick={this.onReset}
            class="btn btn-warning center"
          >
            Сброс
          </button>
        </div>
      </div>
    );
  }
}
