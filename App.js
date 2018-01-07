import React, { Component } from 'react';
import { Row, Grid } from "react-native-easy-grid";

import NumericKeypad from './src/components/NumericKeypad';
import Display from './src/components/Display';

export default class App extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      inputNum:     '',
      leftOperand:  this.randomNum(),
      rightOperand: this.randomNum()
    };
  }

  _onPress = (inputNum) => {
    let stateNum = this.state.inputNum;
    if (parseInt(stateNum, 10) === 0) {
      stateNum = inputNum;
    } else {
      stateNum += inputNum;
    }
    this.setState({ inputNum: stateNum });
  }

  _onDelete = () => {
    this.setState({ inputNum: '' });
  }

  _onEnter = () => {
    const is_correct = this.isCorrect();
    if (is_correct) {
      alert('正解');
    } else {
      alert('間違い');
    }

    this.setState({
      inputNum:     '',
      leftOperand:  this.randomNum(),
      rightOperand: this.randomNum()
    });
  }

  randomNum() {
    const MinNum = 1;
    const MaxNum = 9;
    return Math.floor(Math.random() * (MaxNum + 1 - MinNum)) + MinNum;
  }

  isCorrect() {
    const answer = this.state.leftOperand * this.state.rightOperand;
    return parseInt(answer, 10) === parseInt(this.state.inputNum, 10);
  }

  render() {
    return (
      <Grid>
        <Row>
          <Display
            leftOperand={this.state.leftOperand}
            rightOperand={this.state.rightOperand}
            inputNum={this.state.inputNum}
          />
        </Row>
        <Row>
          <NumericKeypad
            onPress={this._onPress}
            onEnter={this._onEnter}
            onDelete={this._onDelete}
          />
        </Row>
      </Grid>
    );
  }
}
