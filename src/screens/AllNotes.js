import {useTheme} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {EmptyMessage, NoteCard} from '../components';
import {toggleArchive, toggleFavourite} from '../redux/actions/noteActions';

const AllNotes = ({navigation}) => {
  const dispatch = useDispatch();
  const {colors, dark} = useTheme();
  const styles = getStyles(colors, dark);
  const {allNotes} = useSelector(state => state.notes);

  const onClickNote = note => {
    navigation.navigate('CreateNote', {id: note.id});
  };
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
        ListEmptyComponent={<EmptyMessage message={'No Note Yet!'} />}
        numColumns={2}
        keyExtractor={(v, i) => v.id}
        data={allNotes.filter(note => !note.is_archive) || []}
        renderItem={renderNotes}
        contentContainerStyle={{flexGrow: 1}}
        style={{paddingHorizontal: 12, marginTop: 10}}
        columnWrapperStyle={{justifyContent: 'space-between'}}
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
    },
  });
