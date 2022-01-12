import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {FAB, Text} from 'react-native-paper';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import AllNotes from './AllNotes';
import ArchiveNote from './ArchiveNote';
import FavouritNotes from './FavouritNotes';

const Notes = props => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'All', title: 'All'},
    {key: 'Favourit', title: 'Favourit'},
    {key: 'Archived', title: 'Archived'},
  ]);

  const renderScene = ({route, jumbTo}) => {
    switch (route.key) {
      case 'All':
        return <AllNotes {...props} />;
      case 'Favourit':
        return <FavouritNotes {...props} />;
      case 'Archived':
        return <ArchiveNote {...props} />;
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={props => (
          <TabBar
            indicatorStyle={{backgroundColor: 'red'}}
            renderLabel={({route, focused, color}) => (
              <Text style={{color: focused ? 'red' : 'green', margin: 8}}>
                {route.title}
              </Text>
            )}
            style={{backgroundColor: 'white'}}
            {...props}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Notes;

const styles = StyleSheet.create({});
