import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { colors } from '../../utilities/constants';

const Header = ({
  containerStyle,
  showBottomBorder,

  leftIconSource,
  middleIconSource,
  middleIcon = false,
  rightsideicon = false,
  onLeftPress,
  disableLeft,
  leftButtonStyle,

  rightIconSource,
  rightsideIconSource,
  onRightPress,
  onRightsidePress,
  onmiddlepress,
  disableRight,
  disableRightside,
  rightButtonStyle,
  rightsideButtonStyle,
  renderRightButton,
  rightIconStyle,
  rightsideIconStyle,
  renderrightsidebutton,

  title,
  titleStyle,
  renderCenterTitle,
  titlePosition = 'center',
  blackTitle,
}) => {
  const renderLeft = () => {
    if (!disableLeft && leftIconSource) {
      return (
        <TouchableOpacity
          activeOpacity={0.6}
          style={[styles.leftStyle, leftButtonStyle]}
          onPress={onLeftPress}>
          <Image source={{ uri: leftIconSource }}
            style={{
              height: 30,
              width: 30
            }}
          />
        </TouchableOpacity>
      );
    }
    return <View style={styles.leftStyle} />;
  };

  const renderRight = () => {
    if (renderRightButton) {
      return renderRightButton();
    } else if (!disableRight && rightIconSource) {
      return (
        <TouchableOpacity
          activeOpacity={0.6}
          style={[styles.rightStyle, rightButtonStyle]}
          onPress={onRightPress}>
          <Image source={rightIconSource} style={rightIconStyle} />
        </TouchableOpacity>
      );
    }

    return <View style={styles.leftStyle} />;
  };
  const renderRightside = () => {
    if (renderRightButton) {
      return renderrightsidebutton();
    } else if (!disableRightside && rightsideIconSource) {
      return (
        <TouchableOpacity
          activeOpacity={0.6}
          style={[styles.rightsideStyle, rightsideButtonStyle]}
          onPress={onRightsidePress}>
          <Image source={rightsideIconSource} style={rightsideIconStyle} />
        </TouchableOpacity>
      );
    }

    return <View style={styles.leftStyle} />;
  };

  const renderTitle = () => {
    if (renderCenterTitle) {
      return renderCenterTitle();
    } else if (title) {
      return (
        <Text
          style={[
            {
              ...styles.titleStyle,
              textAlign: titlePosition,
              marginHorizontal:
                titlePosition === 'center' ? moderateScale(10) : 0,
              color: blackTitle ? colors.black1 : colors.white1,
            },
            titleStyle,
          ]}
          numberOfLines={1}
          ellipsizeMode={'tail'}>
          {title}
        </Text>
      );
    }
    return <View />;
  };

  return (
    <View
      style={[
        styles.containerStyle,
        containerStyle,
        {
          borderBottomWidth: showBottomBorder ? moderateScale(0.5) : 0,
          borderBottomColor: colors.grey4,
        },
      ]}>
      {renderLeft()}
      {middleIcon ? (
        <TouchableOpacity
          onPress={onmiddlepress}>
          <Image
            source={middleIconSource}
            style={{
              height: moderateScale(35),
              width: moderateScale(35),
              left: 20,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>

      ) : rightsideicon ? (
        renderRightside()
      ) : (
        renderTitle()
      )}

      {renderRight()}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: moderateScale(56),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftStyle: {
    height: moderateScale(56),
    width: moderateScale(56),
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightStyle: {
    height: moderateScale(56),
    width: moderateScale(46),
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightsideStyle: {
    height: moderateScale(56),
    width: moderateScale(46),
    left: moderateScale(126),
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    fontSize: moderateScale(18),
    flex: 1,
    fontWeight: '400'
  },
});

export { Header };
