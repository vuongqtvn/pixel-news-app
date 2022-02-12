import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomIcon from '../../assets/fonts';
import Header from './components/Header';
import Theme from '../../theme';
import {sampleNews} from './data';
import NewsItem from './components/NewsItem';

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  const _renderItems = ({item, index}) => {
    return <NewsItem item={item} isFirst={index === 0} />;
  };
  const _keyExtractor = item => item.id;
  return (
    <View
      style={{
        paddingTop: top,
        ...styles.container,
      }}>
      <FlatList
        data={sampleNews}
        contentContainerStyle={styles.contentFlatListContainer}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <Header />
            <TouchableOpacity style={styles.newsBox} activeOpacity={0.6}>
              <Text style={styles.newsBoxTitle}>
                Covid-19 News :{' '}
                <Text style={styles.newsBoxSubText}>
                  See the latest coverage about Covid-19
                </Text>
              </Text>
              <CustomIcon name="chevron-right-1" size={24} />
            </TouchableOpacity>
            <View style={styles.newForYou}>
              <Text style={styles.newForYouTitle}>News for you</Text>
              <Text style={styles.subTitle}>Top 5 News of the day</Text>
            </View>
          </View>
        }
        renderItem={_renderItems}
        keyExtractor={_keyExtractor}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.Colors.white,
  },
  contentFlatListContainer: {
    paddingHorizontal: 27,
  },
  newsBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Theme.Colors.veryLightPink,
    paddingHorizontal: 11,
    paddingVertical: 20,
    borderRadius: 10,
    marginBottom: 26,
  },
  newsBoxTitle: {
    ...Theme.Fonts.semiBold,
    color: Theme.Colors.oceanBlue,
    fontSize: 16,
    flex: 1,
  },
  newsBoxSubText: {
    color: '#7F7F7F',
  },
  newForYou: {
    marginBottom: 18,
  },
  newForYouTitle: {
    ...Theme.Fonts.bold,
    color: Theme.Colors.primaryText,
    fontSize: 19,
    marginBottom: 3,
  },
  subTitle: {
    ...Theme.Fonts.semiBold,
    fontSize: 15,
    color: '#7C7C7C',
  },
});
