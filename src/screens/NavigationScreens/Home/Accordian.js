import React, { PureComponent } from 'react';
import { LayoutAnimation, Platform, StyleSheet, Text, TouchableOpacity, UIManager, View } from "react-native";
import { PLACEHOLDERIMG, colors, urls } from '../../../utilities/constants';
import { layout } from '../../../utilities/layout';
import { RFValue } from 'react-native-responsive-fontsize';
import FastImage from 'react-native-fast-image';

export default class Accordian extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            expanded: false,
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    render() {

        return (
            <View 
            >
                <TouchableOpacity
                    ref={this.accordian}
                    style={styles.row}
                    onPress={() => this.toggleExpand()}
                >
                    <Text style={[styles.title]}>{this.props.title}</Text>

                </TouchableOpacity>
                <View style={styles.parentHr} />
                {
                    this.state.expanded &&
                    <View style={styles.child}>

                        {
                            this.props.image == '' ?
                                <FastImage
                                    style={{ width: 150, height: 150 }}
                                    source={{
                                        uri: PLACEHOLDERIMG,
                                        priority: FastImage.priority.high,
                                    }}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                                :
                                <FastImage
                                    style={{ width: 150, height: 150 }}
                                    source={{
                                        uri: `${urls.imageUrl}${this.props.image}`,
                                        priority: FastImage.priority.high,
                                    }}
                                    resizeMode={FastImage.resizeMode.contain}
                                />

                        }

                        <Text style={{
                            textAlign: 'auto',
                            maxWidth: layout.size.width - 50,
                            alignSelf: 'center',
                            fontSize: RFValue(14)
                        }}>{this.props.data}</Text>
                    </View>
                }

            </View>
        )
    }

    toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ expanded: !this.state.expanded })
    }

}

const styles = StyleSheet.create({
    title: {
        fontSize: RFValue(14),
        fontWeight: '600',
        textDecorationStyle: 'dotted',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 45,
        width: layout.size.width - 40,
        padding: 8,
        alignItems: 'center',
        backgroundColor: colors.white4,
        margin: 5,
        alignSelf: 'center',
        borderRadius: 5
    },
    parentHr: {
        height: 1,
        color: colors.white1,
        width: '100%'
    },
    child: {
        backgroundColor: colors.white1,
        paddingHorizontal: 25,
        padding: 10,
        alignItems: 'center'
    }

});