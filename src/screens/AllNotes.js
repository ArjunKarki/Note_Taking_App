import {useTheme} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {NoteCard} from '../components';

const AllNotes = () => {
  const {colors, dark} = useTheme();
  const styles = getStyles(colors, dark);
  const {allNotes} = useSelector(state => state.notes);

  console.log(allNotes);

  const onClickNote = note => {};
  const onToggleFav = note => {};

  const renderNotes = ({item, index}) => (
    <NoteCard
      notes={item}
      toggleFav={() => onToggleFav(item)}
      onPress={() => onClickNote(item)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(v, i) => v.id}
        data={allNotes || []}
        renderItem={renderNotes}
        columnWrapperStyle={{justifyContent: 'space-between', marginTop: 10}}
      />
    </View>
  );
};

export default AllNotes;

const getStyles = (colors, isDark) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
      paddingHorizontal: 12,
    },
  });
