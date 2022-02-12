import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import CustomIcon from '../../../assets/fonts';
import Theme from '../../../theme';
import NewsItem from '../../../components/NewsItem';

const PostItem = ({item: data}) => {
  const _renderPostItem = (item, index) => {
    if (!item.category) {
      return (
        <TouchableOpacity
          key={`${item.id}-${index}`}
          activeOpacity={0.6}
          style={styles.postItem}>
          <Image source={item.image} style={styles.postItemImage} />
          <View style={styles.postItemContent}>
            <Text style={styles.postItemTitle} numberOfLines={1}>
              {item.title}
            </Text>
            <Text style={styles.postItemSub}>{`from ${item.subTitle}`}</Text>
          </View>
          <TouchableOpacity>
            <CustomIcon name="menu-vertical" size={20} />
          </TouchableOpacity>
        </TouchableOpacity>
      );
    }
    return <NewsItem key={`${item.id}-${index}`} item={item} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.postHeader}>
        <Text style={styles.postTitle}>
          {!data?.[0].category ? 'Today' : 'Article for you'}
        </Text>
        <TouchableOpacity>
          <Text style={styles.postView}>See All</Text>
        </TouchableOpacity>
      </View>
      {data?.map(_renderPostItem)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  postTitle: {
    flex: 1,
    textTransform: 'uppercase',
    fontSize: 15,
    ...Theme.Fonts.bold,
    color: '#a7a7a7',
  },
  postView: {
    textTransform: 'uppercase',
    fontSize: 13,
    ...Theme.Fonts.bold,
    color: Theme.Colors.primaryText,
  },

  postItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  postItemImage: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
  },
  postItemContent: {flex: 1, marginLeft: 22, justifyContent: 'center'},
  postItemTitle: {
    fontSize: 16,
    color: Theme.Colors.primaryText,
    ...Theme.Fonts.bold,
  },
  postItemSub: {
    fontSize: 15,
    color: Theme.Colors.secondaryText,
    ...Theme.Fonts.bold,
  },
});

export default PostItem;
