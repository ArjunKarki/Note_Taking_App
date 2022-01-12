import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

const FavouritNotes = () => {
  const {colors} = useTheme();

  return (
    <View style={{backgroundColor: colors.background, flex: 1}}>
      <Text>Favourit Notes</Text>
    </View>
  );
};

export default FavouritNotes;

const styles = StyleSheet.create({});
