import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Theme from '../theme';

const NewsItem = ({item}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.container}>
      <Image source={item.image} style={styles.thumbnail} />
      <View style={styles.newsContent}>
        <Text style={styles.newsTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <View style={styles.newsSub}>
          <Text style={styles.subText}>{item.duration} Hours</Text>
          <View style={styles.dot} />
          <Text style={styles.subText}>{item.category.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    marginBottom: 30,
  },
  thumbnail: {
    borderRadius: 10,
    resizeMode: 'cover',
    width: 85,
    height: 85,
  },
  newsContent: {flex: 1, marginRight: 30},
  newsTitle: {
    ...Theme.Fonts.bold,
    fontSize: 16,
    lineHeight: 24,
    color: Theme.Colors.primaryText,
  },
  newsSub: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  subText: {
    ...Theme.Fonts.semiBold,
    fontSize: 14,
    color: Theme.Colors.secondaryText,
  },
  dot: {
    height: 4,
    width: 4,
    marginHorizontal: 15,
    borderRadius: 2,
    backgroundColor: Theme.Colors.secondaryText,
  },
});

export default NewsItem;
