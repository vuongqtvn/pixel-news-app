import {View, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {notificationData} from './data';
import Theme from '../../theme';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from '../../components/Header';

import PostItem from './components/PostItem';

const NotificationScreen = () => {
  const {top} = useSafeAreaInsets();

  const _renderPosts = ({item}) => {
    return <PostItem item={item} />;
  };

  const _keyExtractor = (item, index) => index;

  return (
    <View
      style={{
        paddingTop: top,
        ...styles.container,
      }}>
      <FlatList
        data={Object.values(notificationData)}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <Header style={styles.header} title={'Notification'} />
          </View>
        }
        renderItem={_renderPosts}
        keyExtractor={_keyExtractor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.Colors.white,
  },
  header: {
    marginBottom: 30,
  },
  flatListContent: {paddingHorizontal: 27},
});

export default NotificationScreen;
