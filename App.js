import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Grid, Row } from "react-native-easy-grid";

import Display from './src/components/Display';
import NumericKeypad from './src/components/NumericKeypad';
import Histories from './src/components/Histories';

export default class App extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      inputNum:     '',
      leftOperand:  this.randomNum(),
      rightOperand: this.randomNum(),
      histories:    []
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
    const isCorrect = this.isCorrect();
    if (isCorrect) {
      alert('正解');
    } else {
      alert('間違い');
    }

    const histories = [].concat(this.state.histories);
    histories.unshift({
      key: histories.length + 1,
      inputNum: this.state.inputNum,
      leftOperand: this.state.leftOperand,
      rightOperand: this.state.rightOperand,
      isCorrect: isCorrect
    });

    this.setState({
      inputNum:     '',
      leftOperand:  this.randomNum(),
      rightOperand: this.randomNum(),
      histories:    histories
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
        <Row size={1}>
          <Display
            leftOperand={this.state.leftOperand}
            rightOperand={this.state.rightOperand}
            inputNum={this.state.inputNum}
          />
        </Row>
        <Row size={2}>
          <FlatList
            data={this.state.histories}
            renderItem={({item}) => <Histories item={item} /> }
            />
        </Row>
        <Row size={3}>
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
