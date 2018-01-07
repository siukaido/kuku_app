import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  correct: {
    flex: 1,
    padding: 5,
    backgroundColor: '#ddf',
  },
  incorrect: {
    flex: 1,
    padding: 5,
    backgroundColor: '#fcc',
  },
  text: {
    fontSize: 20,
  }
});

const Histories = (props) => {
  const {
    item
  } = props;

  return (
    <View style={item.isCorrect ? styles.correct : styles.incorrect}>
      <Text style={styles.text}>
        {item.key}問目) {item.isCorrect ? 'o' : 'x'} : {item.leftOperand} x {item.rightOperand} = {item.inputNum}
      </Text>
    </View>
  );
};

export default Histories;
