import {Text, View, Image, StyleSheet} from 'react-native';
import React from 'react';
import CustomIcon from '../../../assets/fonts';
import Theme from '../../../theme';
import Images from '../../../assets/images';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.leftContainer}>
        <CustomIcon name="logo" size={27} color="#0077B6" />
        <Text style={styles.headerText}>
          Pixels <Text style={styles.subHeaderText}>News</Text>
        </Text>
      </View>
      <Image source={Images.logo} style={styles.avatar} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
    marginTop: 16,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    ...Theme.Fonts.bold,
    marginLeft: 9,
    fontSize: 23,
    color: Theme.Colors.oceanBlue,
  },
  subHeaderText: {
    ...Theme.Fonts.semiBold,
    color: Theme.Colors.primaryText,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
  },
});

export default Header;
