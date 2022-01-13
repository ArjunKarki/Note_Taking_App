import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

const EmptyMessage = ({message = 'List is Empty'}) => {
  return (
    <View style={styles.container}>
      <Text>{message}</Text>
    </View>
  );
};

export default EmptyMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
