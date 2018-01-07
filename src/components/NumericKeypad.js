import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Row, Grid } from "react-native-easy-grid";
import NumericKey from './NumericKey';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000'
  },
  delButton: {
    backgroundColor: '#f77'
  },
  delButtonText: {
    color: '#fff'
  },
  enterButton: {
    backgroundColor: '#f77'
  },
  enterButtonText: {
    color: '#fff'
  }
});

export default class NumericKeypad extends Component<{}> {
  _onPress = (num) => {
    this.props.onPress(num);
  }

  _onDelete = () => {
    this.props.onDelete();
  }

  _onEnter = () => {
    this.props.onEnter();
  }

  render() {
    return (
      <Grid style={styles.container}>
        <Row>
          <NumericKey onPress={this._onPress}>1</NumericKey>
          <NumericKey onPress={this._onPress}>2</NumericKey>
          <NumericKey onPress={this._onPress}>3</NumericKey>
        </Row>
        <Row>
          <NumericKey onPress={this._onPress}>4</NumericKey>
          <NumericKey onPress={this._onPress}>5</NumericKey>
          <NumericKey onPress={this._onPress}>6</NumericKey>
        </Row>
        <Row>
          <NumericKey onPress={this._onPress}>7</NumericKey>
          <NumericKey onPress={this._onPress}>8</NumericKey>
          <NumericKey onPress={this._onPress}>9</NumericKey>
        </Row>
        <Row>
          <NumericKey
            onPress={this._onDelete}
            style={styles.delButton}
            textStyle={styles.delButtonText}
          >
            Del
          </NumericKey>
          <NumericKey onPress={this._onPress}>0</NumericKey>
          <NumericKey
            onPress={this._onEnter}
            style={styles.enterButton}
            textStyle={styles.enterButtonText}
          >
            Enter
          </NumericKey>
        </Row>
      </Grid>
    );
  }
}
