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
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import {
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

const DefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    main: '#1D9457',
  },
};

const DarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    // main: '#1D9457',
    main: '#424949',
  },
};

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  const {colors} = useTheme();
  return (
    <Tab.Navigator barStyle={{backgroundColor: colors.main}}>
      <Tab.Screen
        name="Notes"
        component={Notes}
        options={{
          tabBarLabel: 'Notes',
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
  return (
    <PaperProvider theme={DefaultTheme}>
      <View style={{flex: 1}}>
        <StatusBar barStyle={'light-content'} />
        <NavigationContainer theme={DefaultTheme}>
          <Stack.Navigator>
            <Stack.Screen
              options={{headerShown: false}}
              name="home"
              component={HomeTabs}
            />
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
