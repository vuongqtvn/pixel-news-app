/* eslint-disable react-native/no-inline-styles */
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Theme from '../../../theme';

const NewsItem = ({item, isFirst}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={{
        flexDirection: isFirst ? 'column' : 'row-reverse',
        marginBottom: isFirst ? 49 : 30,
      }}>
      <Image
        source={item.image}
        style={[
          styles.thumbnail,
          {
            width: isFirst ? '100%' : 83,
            height: isFirst ? 132 : 83,
          },
        ]}
      />
      <View
        style={[
          styles.newsContent,
          {
            marginTop: isFirst ? 18 : 0,
          },
        ]}>
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
  thumbnail: {
    borderRadius: 10,
    resizeMode: 'cover',
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
