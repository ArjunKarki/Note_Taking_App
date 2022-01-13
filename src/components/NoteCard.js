import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import utils from '../utilities/utils';
import moment from 'moment';

const NoteCard = ({notes, onPress, toggleFav}) => {
  const {colors, dark} = useTheme();
  const styles = getStyles(colors, dark);
  let {title, body, is_favourite, created_at, updated_at} = notes;
  let time = updated_at ? updated_at : created_at;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}>
      <View style={{flexDirection: 'row'}}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <TouchableOpacity onPress={toggleFav}>
          {is_favourite ? (
            <MIcon name="bookmark" size={20} color={colors.main} />
          ) : (
            <MIcon name="bookmark-border" size={20} color={colors.main} />
          )}
        </TouchableOpacity>
      </View>
      <Text numberOfLines={4} style={styles.body}>
        {body}
      </Text>
      <Text numberOfLines={1} style={styles.time}>
        {utils.formattedDateTime(time)}
      </Text>
    </TouchableOpacity>
  );
};

export default NoteCard;

const getStyles = (colors, dark) =>
  StyleSheet.create({
    container: {
      width: utils.width * 0.44,
      justifyContent: 'space-between',
      //   minHeight: 30,
      marginBottom: 10,
      padding: 10,
      backgroundColor: colors.card,
      //   maxHeight: utils.height * 0.22,
      borderRadius: 10,
      overflow: 'hidden',
    },
    title: {
      flex: 1,
      marginRight: 2,
      fontWeight: '500',
      fontSize: 18,
    },
    body: {
      color: colors.textGray,
      marginTop: 10,
      textAlignVertical: 'top',
      flex: 1,
    },
    time: {marginTop: 10, fontSize: 12, color: colors.textGray1},
  });
