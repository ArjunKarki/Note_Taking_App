import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
  useTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import CreateNote from './CreateNote';
import Notes from './Notes';
import Setting from './Setting';
import {Text} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import {
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {useSelector} from 'react-redux';

const DefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    main: '#1D9457',
    background: '#fff',
    delete: '#FF0000',
    placeholder: '#BDC3C7',
    card: '#F2F3F4',
    textGray: '#424949',
    textGray1: '#616A6B',
  },
};

const DarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    main: '#424949',
    delete: '#FF0000',
    placeholder: '#566573',
    card: '#424949',
    textGray: '#CCD1D1',
    textGray1: '#99A3A4',
  },
};

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  const {colors, dark} = useTheme();
  return (
    <Tab.Navigator
      activeColor={dark ? '#1D9457' : '#fff'}
      inactiveColor={dark ? '#fff' : '#AEB6BF'}
      barStyle={{backgroundColor: colors.main}}>
      <Tab.Screen
        name="Notes"
        component={Notes}
        options={{
          tabBarLabel: (
            <Text style={{fontWeight: 'bold', fontSize: 12}}>Notes</Text>
          ),
          tabBarIcon: ({color}) => (
            <MIcon name="notes" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({color}) => (
            <MIcon name="settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  const {darkTheme} = useSelector(state => state.theme);
  let theme = darkTheme ? DarkTheme : DefaultTheme;
  return (
    <PaperProvider theme={theme}>
      <View style={{flex: 1}}>
        <StatusBar
          backgroundColor={theme.colors.main}
          barStyle="light-content"
        />
        <NavigationContainer theme={theme}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="home" component={HomeTabs} />
            <Stack.Screen
              options={{}}
              name="CreateNote"
              component={CreateNote}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </PaperProvider>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
