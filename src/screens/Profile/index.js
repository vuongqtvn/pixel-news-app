import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from '../../components/Header';
import Theme from '../../theme';
import {categories} from './data';
import TopicItem from '../../components/TopicItem';

const ProfileScreen = () => {
  const {top} = useSafeAreaInsets();

  const _renderTopic = ({item, index}) => {
    return <TopicItem item={item} index={index} />;
  };
  const _keyExtractor = item => item.id;
  return (
    <View
      style={{
        paddingTop: top,
        ...styles.container,
      }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        ListHeaderComponent={
          <View>
            <Header title="Summary Stats" style={styles.header} />

            <Text style={styles.title}>YOUR STATS</Text>

            <View style={styles.statsBox}>
              <Text style={styles.statsBoxTitle}>Today Daily</Text>
              <View style={styles.statsBoxList}>
                <View style={styles.statsBoxItem}>
                  <Text style={styles.statsBoxItemTitle}>15</Text>
                  <Text style={styles.statsBoxItemSub}>Read</Text>
                </View>
                <View style={styles.statsBoxItem}>
                  <Text style={styles.statsBoxItemTitle}>5</Text>
                  <Text style={styles.statsBoxItemSub}>Favorite</Text>
                </View>
                <View style={styles.statsBoxItem}>
                  <Text style={styles.statsBoxItemTitle}>23</Text>
                  <Text style={styles.statsBoxItemSub}>Saved</Text>
                </View>
              </View>
            </View>

            <Text style={styles.title}>Favorite topic</Text>
          </View>
        }
        data={categories}
        renderItem={_renderTopic}
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
  flatListContent: {paddingHorizontal: 27},
  header: {
    marginBottom: 38,
  },
  title: {
    ...Theme.Fonts.bold,
    fontSize: 15,
    marginBottom: 22,
    textTransform: 'uppercase',
  },
  statsBox: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: Theme.Colors.border,
    borderRadius: 10,
    marginBottom: 30,
  },
  statsBoxTitle: {
    ...Theme.Fonts.bold,
    color: Theme.Colors.primaryText,
    fontSize: 17,
    marginBottom: 20,
  },
  statsBoxList: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  statsBoxItem: {
    flex: 1,
  },
  statsBoxItemTitle: {
    ...Theme.Fonts.bold,
    color: Theme.Colors.primaryText,
    fontSize: 35,
    textAlign: 'center',
  },
  statsBoxItemSub: {
    ...Theme.Fonts.regular,
    color: '#a1a1a1',
    fontSize: 17,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});

export default ProfileScreen;
