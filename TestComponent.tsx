import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

type Props = {
  close: () => void;
};

function TestComponent({close}: Props): React.JSX.Element {
  return (
    <View style={styles.viewStyle}>
      <Text>Test</Text>
      <Button title="Close" onPress={close} />
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'transparent', // DOESN'T WORK
    // backgroundColor: 'red', // WORKS
  },
});

export default TestComponent;
