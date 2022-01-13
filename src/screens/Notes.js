import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {FAB, Text} from 'react-native-paper';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useSelector} from 'react-redux';
import AllNotes from './AllNotes';
import ArchiveNote from './ArchiveNote';
import FavouritNotes from './FavouritNotes';

const Notes = props => {
  const {colors, dark} = useTheme();
  const styles = getStyles(colors, dark);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'All', title: 'All'},
    {key: 'Favourite', title: 'Favourite'},
    {key: 'Archived', title: 'Archived'},
  ]);

  const renderScene = ({route, jumbTo}) => {
    switch (route.key) {
      case 'All':
        return <AllNotes {...props} />;
      case 'Favourite':
        return <FavouritNotes {...props} />;
      case 'Archived':
        return <ArchiveNote {...props} />;
    }
  };

  const onCreateNote = () => {
    props.navigation.navigate('CreateNote');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={props => (
          <TabBar
            indicatorStyle={styles.tabBarIndicator}
            renderLabel={({route, focused, color}) => (
              <Text
                style={[
                  styles.tabLabel,
                  {color: focused ? (dark ? '#1D9457' : '#fff') : color},
                ]}>
                {route.title}
              </Text>
            )}
            style={{backgroundColor: colors.main}}
            {...props}
          />
        )}
      />
      <FAB style={[styles.fab]} icon="plus" onPress={onCreateNote} />
    </SafeAreaView>
  );
};

export default Notes;

const getStyles = (colors, dark) =>
  StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
      backgroundColor: '#1D9457',
    },
    container: {flex: 1, backgroundColor: colors.main},
    tabBarIndicator: {
      backgroundColor: dark ? '#1D9457' : '#fff',
      height: 3,
    },
    tabLabel: {
      margin: 8,
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
