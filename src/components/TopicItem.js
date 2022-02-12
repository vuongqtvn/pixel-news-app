import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Theme from '../theme';
import {getColors} from '../screens/Profile/data';

const TopicItem = ({item, index, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.avatar, {backgroundColor: getColors(index)}]}>
        <Text style={styles.avatarText}>{item.title?.[0]}</Text>
      </View>
      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.contentTitle}>
          {item.title}
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={[
          styles.button,
          {
            backgroundColor: item.follow
              ? Theme.Colors.white
              : Theme.Colors.oceanBlue,
          },
        ]}>
        <Text
          style={[
            styles.buttonText,
            {color: !item.follow ? Theme.Colors.white : Theme.Colors.oceanBlue},
          ]}>
          {item.follow ? 'unfollow' : 'follow'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center', marginBottom: 25},
  avatar: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: Theme.Colors.oceanBlue,
    marginRight: 20,
  },
  avatarText: {
    ...Theme.Fonts.bold,
    color: Theme.Colors.white,
    fontSize: 25,
    textTransform: 'uppercase',
  },
  content: {
    flex: 1,
  },
  contentTitle: {
    ...Theme.Fonts.bold,
    color: Theme.Colors.primaryText,
    fontSize: 18,
  },
  button: {
    paddingVertical: 13,
    paddingHorizontal: 15,
    backgroundColor: Theme.Colors.white,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Theme.Colors.border,
  },
  buttonText: {
    ...Theme.Fonts.semiBold,
    textTransform: 'capitalize',
    color: Theme.Colors.oceanBlue,
  },
});

export default TopicItem;
