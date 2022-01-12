import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

const ArchiveNote = () => {
  const {colors} = useTheme();

  return (
    <View style={{backgroundColor: colors.background, flex: 1}}>
      <Text>Archived notes</Text>
    </View>
  );
};

export default ArchiveNote;

const styles = StyleSheet.create({});
