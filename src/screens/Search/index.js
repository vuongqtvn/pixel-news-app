/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from '../../components/Header';
import Theme from '../../theme';
import {defaultCate, categories, sampleNews, formatData} from './data';
import NewsItem from '../../components/NewsItem';
import helper from '../../utils/helper';

const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const [currentCate, setCurrentCate] = React.useState('default');

  const _renderCateItem = item => {
    const isSelected = item.id === currentCate;
    return (
      <TouchableOpacity key={item.id} onPress={() => setCurrentCate(item.id)}>
        <View style={{paddingRight: 24}}>
          <Text
            style={{
              fontSize: 13,
              textTransform: 'uppercase',
              fontFamily: isSelected ? 'Roboto-Bold' : 'Roboto-Medium',
              color: isSelected
                ? Theme.Colors.oceanBlue
                : Theme.Colors.secondaryText,
            }}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const _renderPosts = ({item}) => {
    if (currentCate !== 'default' && item.id !== currentCate) {
      return null;
    }

    return (
      <View style={{marginBottom: 29}}>
        {item.posts?.map(_renderPostItem)}
        <TouchableOpacity style={[styles.button, styles.readMoreButton]}>
          <Text style={[styles.buttonText, styles.readMoreText]}>
            {`Read more on ${item.title}`}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const _renderPostItem = item => {
    return <NewsItem key={item.id} item={item} />;
  };
  const _keyExtractor = item => item.id;

  return (
    <View
      style={{
        paddingTop: top,
        ...styles.container,
      }}>
      <FlatList
        data={formatData(categories, sampleNews)}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <Header title={'Headlines'} style={styles.header} />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.contentContainer}>
              {[...defaultCate, ...categories].map(_renderCateItem)}
            </ScrollView>
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
    marginBottom: 25,
  },
  flatListContent: {paddingHorizontal: 27},
  button: {
    paddingVertical: 16,
    backgroundColor: helper.hexToRGB('#e8e8e8', 0.25),
    borderRadius: 10,
  },
  buttonText: {
    ...Theme.Fonts.semiBold,
    fontSize: 16,
    textAlign: 'center',
    color: Theme.Colors.secondaryText,
  },
  contentContainer: {paddingTop: 28, paddingBottom: 51},
  readMoreButton: {
    backgroundColor: helper.hexToRGB(Theme.Colors.lightBlue, 0.1),
  },
  readMoreText: {
    color: Theme.Colors.oceanBlue,
  },
});

export default SearchScreen;
