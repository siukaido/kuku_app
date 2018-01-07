import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  question: {
    fontSize: 30,
  },
  answer: {
    fontSize: 30,
  },
});

export default class Display extends Component <{}> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      leftOperand,
      rightOperand,
      inputNum
    } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.question}>
          {leftOperand} x {rightOperand} = {inputNum || '?'}
        </Text>
      </View>
    );
  }
}
