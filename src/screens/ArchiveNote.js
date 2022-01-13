import {useTheme} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {EmptyMessage, NoteCard} from '../components';
import {toggleArchive, toggleFavourite} from '../redux/actions/noteActions';

const ArchiveNote = ({navigation}) => {
  const dispatch = useDispatch();
  const {colors, dark} = useTheme();
  const styles = getStyles(colors, dark);
  const {allNotes} = useSelector(state => state.notes);

  const onClickNote = note => {
    navigation.navigate('CreateNote', {id: note.id});
  };

  const onToggleArchive = note => {
    dispatch(toggleArchive(note));
  };

  const renderNotes = ({item, index}) => (
    <NoteCard
      notes={item}
      togleArchive={() => onToggleArchive(item)}
      onPress={() => onClickNote(item)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        ListEmptyComponent={<EmptyMessage message={'No Archived Note yet!'} />}
        keyExtractor={(v, i) => v.id}
        data={allNotes.filter(note => note.is_archive) || []}
        renderItem={renderNotes}
        contentContainerStyle={{flexGrow: 1}}
        style={{paddingHorizontal: 12, marginTop: 10}}
        columnWrapperStyle={{justifyContent: 'space-between', marginTop: 10}}
      />
    </View>
  );
};

export default ArchiveNote;

const getStyles = (colors, isDark) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
    },
  });
