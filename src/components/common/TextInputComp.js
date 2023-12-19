import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  I18nManager,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { colors } from '../../utilities/constants';
import { layout } from '../../utilities/layout';

const TextInputComp = ({
  value,
  onChangeText,
  placeholder,
  inputStyle,
  textStyle,
  marignBottom = 16,
  label,
  maxLength,
  required = true,
  labelTextStyle,
  keyboardType,
  onFocus,
  editable,
  editProfile = false,
  secureTextEntry,
  onkeypress,
  multiline,
  ...props
}) => {
  const textAlign = I18nManager.isRTL ? 'right' : 'left';
  return (
    <View
      style={{
        marginBottom: marignBottom,
      }}>
      {/* <View style={{flexDirection: 'row'}}>
        {label && (
          <Text style={{...styles.labelText, ...labelTextStyle}}>{label}</Text>
        )}
      </View> */}

      <TextInput
        onFocus={onFocus}
        placeholder={placeholder}
        style={{
          ...styles.inputStyle,
          ...inputStyle,
          textAlign,
          borderRadius: moderateScale(5),
        }}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={colors.grey11}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry ? secureTextEntry : false}
        onKeyPress={({ nativeEvent }) => {
          nativeEvent.key === 'Backspace' ? nativeEvent.key === 'Backspace' : false
        }}
        multiline={multiline}
        editable={editable}
        autoCapitalize="none"
        maxLength={maxLength ? maxLength : 500}
        {...props}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputStyle: {
    fontSize: RFValue(12),
    backgroundColor: colors.transparent,
    paddingVertical: moderateVerticalScale(10),
    paddingHorizontal: moderateScale(20),
    borderColor: colors.primary,
    height: moderateVerticalScale(35),
    width: layout.size.width - 30,
    borderWidth: 0.5,
  },
  labelText: {
    color: colors.black1,
    fontSize: RFValue(14),
    paddingHorizontal: 5,
  },
});

export default TextInputComp;
