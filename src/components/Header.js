import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import CustomIcon from '../assets/fonts';
import Theme from '../theme';

const Header = ({title, onPress, style}) => {
  return (
    <View style={[styles.header, style]}>
      <View style={styles.leftContainer}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <CustomIcon
          size={6}
          name="menu-horizontal"
          color={Theme.Colors.primaryText}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  leftContainer: {
    flex: 1,
  },
  headerText: {
    ...Theme.Fonts.bold,
    fontSize: 23,
    color: Theme.Colors.primaryText,
  },
});

export default Header;
