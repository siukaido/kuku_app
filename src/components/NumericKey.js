import React from 'react';
import { StyleSheet } from 'react-native';
import { Col } from 'react-native-easy-grid';
import Button from 'apsl-react-native-button';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#eee',
    height: '100%'
  },
  buttonText: {
    fontSize: 40
  }
});

const NumericKey = (props) => {
  const {
    onPress,
    children,
    style,
    textStyle
  } = props;

  return (
    <Col>
      <Button
        onPress={() => onPress(children)}
        style={[styles.button, style]}
        textStyle={[styles.buttonText, textStyle]}
      >
        {children}
      </Button>
    </Col>
  );
};

export default NumericKey;
