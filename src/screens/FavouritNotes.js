import {useTheme} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {NoteCard} from '../components';
import {toggleFavourite} from '../redux/actions/noteActions';

const FavouriteNote = () => {
  const dispatch = useDispatch();
  const {colors, dark} = useTheme();
  const styles = getStyles(colors, dark);
  const {allNotes} = useSelector(state => state.notes);

  const onClickNote = note => {};
  const onToggleFav = note => {
    dispatch(toggleFavourite(note));
  };

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
        data={allNotes.filter(note => note.is_favourite) || []}
        renderItem={renderNotes}
        columnWrapperStyle={{justifyContent: 'space-between', marginTop: 10}}
      />
    </View>
  );
};

export default FavouriteNote;

const getStyles = (colors, isDark) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
      paddingHorizontal: 12,
    },
  });
