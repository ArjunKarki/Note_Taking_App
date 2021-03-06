import React, {useEffect, useState} from 'react';
import {
  Alert,
  Keyboard,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text, FAB} from 'react-native-paper';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import utils from '../utilities/utils';
import {useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteNote,
  saveNote,
  toggleArchive,
  toggleFavourite,
  updateNote,
} from '../redux/actions/noteActions';

const CreateNote = ({navigation, route}) => {
  const {allNotes} = useSelector(state => state.notes);
  const dispatch = useDispatch();
  const {colors, dark} = useTheme();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [focus, setFocus] = useState(false);
  const [note, setNote] = useState(null);
  const styles = getStyles(colors, dark);
  useEffect(() => {
    let id = route.params?.id;
    if (id) {
      let note = allNotes.filter(note => note.id == id)[0];
      if (note) {
        setTitle(note.title);
        setBody(note.body);
        setNote(note);
      }
    }
  }, [allNotes]);

  const goBack = () => {
    navigation.goBack();
  };

  const requestDelete = () => {
    Alert.alert('Sure to delete note?', '', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => onDelete(),
      },
    ]);
  };

  const onDelete = () => {
    goBack();
    dispatch(deleteNote(note.id));
  };

  const onSave = () => {
    Keyboard.dismiss();
    setFocus(false);
    if (note) {
      dispatch(updateNote(title, body, note.id));
    } else {
      let newNote = {
        id: new Date().getTime(),
        title,
        body,
        created_at: new Date(),
        updated_at: null,
        is_favourite: false,
        is_archive: false,
      };
      dispatch(saveNote(newNote));
      navigation.setParams({id: newNote.id});
    }
  };

  const onToggleFav = () => {
    dispatch(toggleFavourite(note));
  };

  const onToggleArchive = () => {
    dispatch(toggleArchive(note));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.background}
        barStyle={dark ? 'light-content' : 'dark-content'}
      />
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={{flex: 1}}>
          <MIcon name="arrow-back-ios" color={colors.text} size={22} />
        </TouchableOpacity>
        {/* {!note && (
          <Text style={styles.headerText}>{utils.formattedDate()}</Text>
        )} */}
        <View style={styles.actionView}>
          {!!(title || body) && (
            <>
              {focus ? (
                <TouchableOpacity onPress={onSave}>
                  <MCIcon
                    name="check"
                    size={25}
                    style={{marginRight: 10}}
                    color={colors.text}
                  />
                </TouchableOpacity>
              ) : (
                <View style={styles.actionBtnView}>
                  <TouchableOpacity
                    onPress={onToggleArchive}
                    style={{marginRight: 15}}>
                    {note?.is_archive ? (
                      <MIcon name="unarchive" size={22} color={colors.text} />
                    ) : (
                      <MCIcon
                        name="archive-outline"
                        size={22}
                        color={colors.text}
                      />
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity onPress={onToggleFav}>
                    {note?.is_favourite ? (
                      <MIcon name="bookmark" color={colors.text} size={22} />
                    ) : (
                      <MIcon
                        name="bookmark-border"
                        color={colors.text}
                        size={22}
                      />
                    )}
                  </TouchableOpacity>
                </View>
              )}
            </>
          )}
        </View>
      </View>
      <View style={styles.contentView}>
        <Text style={styles.oldTime}>
          {note
            ? ` last updated at ${utils.formattedDateTime(note?.created_at)}`
            : null}
        </Text>
        <TextInput
          onFocus={() => setFocus(true)}
          blurOnSubmit={true}
          onChangeText={setTitle}
          value={title}
          multiline={true}
          placeholder="Title"
          placeholderTextColor={colors.placeholder}
          style={styles.titleInput}
        />
        <TextInput
          onFocus={() => setFocus(true)}
          value={body}
          onChangeText={setBody}
          multiline={true}
          textAlignVertical="top"
          placeholder="Start Typing...."
          placeholderTextColor={colors.placeholder}
          style={styles.bodyInput}
        />
      </View>
      {note && (
        <FAB style={[styles.fab]} icon="delete" onPress={requestDelete} />
      )}
    </SafeAreaView>
  );
};

export default CreateNote;

const getStyles = (colors, isDark) =>
  StyleSheet.create({
    container: {flex: 1, backgroundColor: colors.background},
    header: {
      flexDirection: 'row',
      height: 40,
      alignItems: 'center',
      paddingHorizontal: 15,
      backgroundColor: colors.background,
    },
    actionView: {flex: 1, alignItems: 'flex-end'},
    headerText: {flex: 1, textAlign: 'center'},
    actionBtnView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    contentView: {flex: 1, paddingHorizontal: 15},
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 30,
      backgroundColor: colors.delete,
    },
    titleInput: {
      minHeight: 45,
      fontSize: 24,
      color: colors.text,
    },
    bodyInput: {fontSize: 18, flex: 1, color: colors.text},
    oldTime: {
      marginTop: 4,
      fontSize: 12,
      color: colors.textGray1,
      textAlign: 'right',
    },
  });
