import {useTheme} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Text, Switch} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {CHANGE_THEME} from '../redux/const';

const Setting = () => {
  const {colors, dark} = useTheme();
  const dispatch = useDispatch();
  const {darkTheme} = useSelector(state => state.theme);
  const onChangeTheme = () => {
    dispatch({type: CHANGE_THEME});
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.main}}>
      <View
        style={{
          height: 50,
          backgroundColor: colors.main,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
          Setting
        </Text>
      </View>
      <View style={{flex: 1, backgroundColor: colors.background}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            paddingVertical: 15,
            alignItems: 'center',
            borderBottomWidth: 0.5,
            borderBottomColor: colors.main,
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Dark Theme</Text>
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

const styles = StyleSheet.create({});
