import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

const AllNotes = () => {
  const {colors} = useTheme();
  return (
    <View style={{backgroundColor: colors.background, flex: 1}}>
      <Text>AllNotes</Text>
    </View>
  );
};

export default AllNotes;

const styles = StyleSheet.create({});
