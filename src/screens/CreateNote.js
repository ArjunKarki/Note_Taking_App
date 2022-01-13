import React, {useState} from 'react';
import {
  Keyboard,
  SafeAreaView,
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

const CreateNote = ({navigation}) => {
  const {colors, dark} = useTheme();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [focus, setFocus] = useState(false);
  const styles = getStyles(colors, dark);

  const goBack = () => {
    navigation.goBack();
  };

  const onDelete = () => {
    goBack();
  };
  const onSave = () => {
    Keyboard.dismiss();
    setFocus(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={{flex: 1}}>
          <MIcon name="arrow-back-ios" color={colors.text} size={20} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{utils.formattedDate()}</Text>
        <View style={styles.actionView}>
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
              <TouchableOpacity style={{marginRight: 15}}>
                {/* <MIcon name="unarchive" size={20} color={colors.text} /> */}
                <MCIcon name="archive-outline" size={20} color={colors.text} />
              </TouchableOpacity>
              <TouchableOpacity>
                <MIcon name="bookmark-border" color={colors.text} size={20} />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
      <View style={styles.contentView}>
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
      <FAB style={[styles.fab]} icon="delete" onPress={onDelete} />
    </SafeAreaView>
  );
};

export default CreateNote;

const getStyles = (colors, isDark) =>
  StyleSheet.create({
    container: {flex: 1, backgroundColor: colors.background},
    header: {
      flexDirection: 'row',
      height: 45,
      alignItems: 'center',
      paddingHorizontal: 10,
      backgroundColor: colors.background,
    },
    actionView: {flex: 1, alignItems: 'flex-end'},
    headerText: {flex: 1, textAlign: 'center'},
    actionBtnView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    contentView: {flex: 1, paddingHorizontal: 12},
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 30,
      backgroundColor: colors.delete,
    },
    titleInput: {minHeight: 50, fontSize: 22, color: colors.text},
    bodyInput: {fontSize: 20, flex: 1, color: colors.text},
  });
