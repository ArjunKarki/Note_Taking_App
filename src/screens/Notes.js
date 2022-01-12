import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {FAB, Text} from 'react-native-paper';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import AllNotes from './AllNotes';
import ArchiveNote from './ArchiveNote';
import FavouritNotes from './FavouritNotes';

const Notes = props => {
  const {colors, dark} = useTheme();
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

  const onCreateNote = () => {};

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.main}}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={props => (
          <TabBar
            indicatorStyle={{
              backgroundColor: dark ? '#1D9457' : '#fff',
              height: 3,
            }}
            renderLabel={({route, focused, color}) => (
              <Text
                style={{
                  color: focused ? (dark ? '#1D9457' : '#fff') : color,
                  margin: 8,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                {route.title}
              </Text>
            )}
            style={{backgroundColor: colors.main}}
            {...props}
          />
        )}
      />
      <FAB
        style={[styles.fab, {backgroundColor: colors.main}]}
        icon="plus"
        onPress={onCreateNote}
      />
    </SafeAreaView>
  );
};

export default Notes;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
