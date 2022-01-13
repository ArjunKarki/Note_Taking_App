import {useTheme} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Text, Switch} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {CHANGE_THEME} from '../redux/const';

const Setting = () => {
  const {colors, dark} = useTheme();
  const styles = getStyles(colors, dark);
  const dispatch = useDispatch();
  const {darkTheme} = useSelector(state => state.theme);
  const onChangeTheme = () => {
    dispatch({type: CHANGE_THEME});
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerLabel}>Setting</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.label}>Dark Theme</Text>
          <Switch
            color={'#1D9457'}
            value={darkTheme}
            onValueChange={onChangeTheme}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Setting;

const getStyles = (colors, dark) =>
  StyleSheet.create({
    container: {flex: 1, backgroundColor: colors.main},
    header: {
      height: 50,
      backgroundColor: colors.main,
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerLabel: {color: '#fff', fontSize: 16, fontWeight: 'bold'},
    content: {flex: 1, backgroundColor: colors.background},
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      paddingVertical: 15,
      alignItems: 'center',
      borderBottomWidth: 0.5,
      borderBottomColor: colors.main,
    },
    label: {fontSize: 16, fontWeight: 'bold'},
  });
