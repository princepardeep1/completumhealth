//import liraries
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
//internal libraries
import FastImage from 'react-native-fast-image';
import { RFValue } from 'react-native-responsive-fontsize';
import { moderateScale } from 'react-native-size-matters';
import { Header } from '../../../components/common';
import { PLACEHOLDERIMG, colors, urls } from '../../../utilities/constants';
import { layout } from '../../../utilities/layout';

const DetailScreen = ({ navigation, route }) => {
    const { item
    } = route?.params;

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: colors.white1,
            }}>

            <Header
                containerStyle={{
                    backgroundColor: colors.transparent,
                    height: moderateScale(60),
                }}
                title={'Character Detail'}
                titleStyle={{
                    color: colors.black1,
                }}
                leftIconSource={'https://cdn1.iconfinder.com/data/icons/duotone-essentials/24/chevron_backward-512.png'}
                leftButtonStyle={{
                }}
                onLeftPress={() => {
                    navigation.goBack();
                }}
            />
            <ScrollView style={{
                flex: 1
            }}>

                <View style={{
                    alignItems:'center'
                }}>
                    {
                        item?.Icon?.URL == '' ?
                            <FastImage
                                style={{ width: 100, height: 150 }}
                                source={{
                                    uri: PLACEHOLDERIMG,
                                    priority: FastImage.priority.high,
                                }}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                            :
                            <FastImage
                                style={{ width: 100, height: 150 }}
                                source={{
                                    uri: `${urls.imageUrl}${item?.Icon?.URL}`,
                                    priority: FastImage.priority.high,
                                }}
                                resizeMode={FastImage.resizeMode.contain}
                            />

                    }
                    <Text
                        style={{
                            fontSize: RFValue(12),
                            maxWidth: layout.size.width - 50
                        }}
                    >
                        {
                            item.Result.replace(/(<([^>]+)>)/ig, '')
                        }
                    </Text>
                </View>

            </ScrollView>
        </View >
    );
};

export default DetailScreen;
