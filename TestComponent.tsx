import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

type Props = {
  close: () => void;
};

function TestComponent({close}: Props): React.JSX.Element {
  return (
    <View style={styles.viewStyle}>
      <Text>TestComponent</Text>
      <Button title="Close" onPress={close} />
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'blue',
    marginTop: 100,
  },
});

export default TestComponent;
