//import liraries
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { useDispatch, useSelector } from 'react-redux';

//internal libraries
import { RFValue } from 'react-native-responsive-fontsize';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { appTypes } from '../../../components/common';
import { Loader } from '../../../components/common/Loader';
import TextInputComp from '../../../components/common/TextInputComp';
import { getCharacters, getWireCharacters } from '../../../store/actions';
import { colors, screenNames } from '../../../utilities/constants';
import { layout } from '../../../utilities/layout';
import Accordian from "./Accordian";

const Home = ({ navigation, route }) => {
  let app = useSelector(state => state.app);
  const dispatch = useDispatch();

  const [simpsonsCharacterArr, setSimpsonsCharacterArr] = useState([]);
  const [wireCharacterArr, setWireCharacterArr] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [state, setState] = useState({
    searchtxt: ''
  });

  const { searchtxt } = state;

  const _onChangeText = key => val => {
    setState({ ...state, [key]: val });
  };

  let bundleId = DeviceInfo.getBundleId();
  let isTablet = DeviceInfo.isTablet();

  // Api calling
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (bundleId === appTypes.simpsonsviewer.package) {
        dispatch(
          getCharacters({}, cb => {
            if (cb?.RelatedTopics) {
              setSimpsonsCharacterArr(cb?.RelatedTopics);
              setFilteredData(cb?.RelatedTopics)
            }
          }),
        );
      } else {
        dispatch(
          getWireCharacters({}, cb => {
            if (cb?.RelatedTopics) {
              setWireCharacterArr(cb?.RelatedTopics);
            }
          }),
        );
      }

    });
    return unsubscribe;
  }, [navigation]);


  //search Functionality
  useEffect(() => {

    if (bundleId === appTypes.simpsonsviewer.package) {
      const filtered = simpsonsCharacterArr.filter(item =>
        item.Result.replace(/(<([^>]+)>)/ig, '').toLowerCase().includes(searchtxt.toLowerCase()),
      ); 

      if (searchtxt === '') {
        return setSimpsonsCharacterArr(app.listArr);
      }
      setSimpsonsCharacterArr(filtered);
    } else {
      const filtered = wireCharacterArr.filter(item =>
        item.Result.replace(/(<([^>]+)>)/ig, '').toLowerCase().includes(searchtxt.toLowerCase()),
      );

      if (searchtxt === '') {
        return setWireCharacterArr(app.listArr);
      }
      setWireCharacterArr(filtered);
    }

  }, [searchtxt]);

  //simpsons character UI
  const renderAccordians = () => {
    const items = [];
    for (let item of simpsonsCharacterArr) {
      items.push(
        <Accordian
          title={item.Result.replace(/(<([^>]+)>)/ig, '')}
          data={item.Result.replace(/(<([^>]+)>)/ig, '')}
          image={item?.Icon?.URL}
        />
      );
    }
    return items;
  }

  // wire character UI
  const renderWireAccordians = () => {
    const items = [];
    for (let item of wireCharacterArr) {
      items.push(
        <Accordian
          title={item.Result.replace(/(<([^>]+)>)/ig, '')}
          data={item.Result.replace(/(<([^>]+)>)/ig, '')}
          image={item?.Icon?.URL}
        />
      );
    }
    return items;
  }

  // Items of Simpsons Arr
  const _renderItems = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate(screenNames.DetailScreen, { item: item })}
      style={{
        margin: 5
      }}
    >
      <Text style={styles.title}
        numberOfLines={1}
      >
        {
          item.Result.replace(/(<([^>]+)>)/ig, '')
        }
      </Text>
    </TouchableOpacity>

  );

  // Items of Wire Arr
  const _renderWireItems = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate(screenNames.DetailScreen, { item: item })}
      style={{
        margin: 5
      }}
    >
      <Text style={styles.title}
        numberOfLines={1}
      >
        {
          item.Result.replace(/(<([^>]+)>)/ig, '')
        }
      </Text>
    </TouchableOpacity>

  );


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white1,
      }}>

      <ScrollView
        style={{
          flex: 1
        }}
      >
        <TextInputComp
          label={''}
          value={searchtxt}
          placeholder={'Search Here...'}
          inputStyle={styles.searchStyle}
          onChangeText={_onChangeText('searchtxt')}
        />

        {bundleId === appTypes.simpsonsviewer.package && isTablet ? renderAccordians()
          :
          bundleId === appTypes.simpsonsviewer.package ?
            <FlatList
              extraData={simpsonsCharacterArr}
              data={simpsonsCharacterArr}
              showsVerticalScrollIndicator={false}
              renderItem={_renderItems}
              style={{ marginTop: 20 }}
              keyExtractor={(item, index) => 'key' + index}
              ListHeaderComponent={() =>
                simpsonsCharacterArr && simpsonsCharacterArr.length == 0 ? <Text style={{}}></Text> : null
              }
            /> : bundleId === appTypes.wireviewer.package && isTablet ? renderWireAccordians() :
              <FlatList
                extraData={wireCharacterArr}
                data={wireCharacterArr}
                showsVerticalScrollIndicator={false}
                renderItem={_renderWireItems}
                style={{ marginTop: 20 }}
                keyExtractor={(item, index) => 'key' + index}
                ListHeaderComponent={() =>
                  wireCharacterArr && wireCharacterArr.length == 0 ? <Text style={{}}></Text> : null
                }
              />
        }

      </ScrollView>

      <Loader
        isLoading={app.loading}
        isAbsolute
      />
    </View >
  );
};


const styles = StyleSheet.create({
  title: {
    fontSize: RFValue(16),
    fontWeight: 'bold',
    textDecorationStyle: 'dotted',
    height: 44,
    width: layout.size.width - 40,
    padding: 10,
    alignItems: 'center',
    backgroundColor: colors.white4,
    margin: 5,
    alignSelf: 'center',
    borderRadius: 5
  },
  searchStyle: {
    fontSize: RFValue(14),
    backgroundColor: colors.white1,
    paddingVertical: moderateVerticalScale(10),
    paddingHorizontal: moderateScale(10),
    borderColor: colors.grey12,
    height: moderateVerticalScale(40),
    width: layout.size.width - 80,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 10
  }
});

export default Home;
