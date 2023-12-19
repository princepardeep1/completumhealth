import { put } from 'redux-saga/effects';
import { actionTypes, urls } from '../../utilities/constants';
import { request } from '../../utilities/request';
import { getAPIError, showErrorAlert } from '../../utilities/helperFunctions';

function* getCharacterSaga(params) {
  try {

    const config = {
      url: urls.simpsons_Character,
      method: 'GET',
    };
    const response = yield request(config);
    params?.cb(response?.data)
    yield put({
      type: actionTypes.GET_CHARACTER_SUCCEEDED,
      payload: response?.data?.RelatedTopics
    });

  } catch (error) {
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.GET_CHARACTER_FAIL,
    });
  }
}


function* getWireCharacterSaga(params) {
  try {

    const config = {
      url: urls.wire_Character,
      method: 'GET',
    };
    const response = yield request(config);
    params?.cb(response?.data)
    yield put({
      type: actionTypes.GET_WIRE_CHARACTER_SUCCEEDED,
      payload: response?.data?.RelatedTopics
    });

  } catch (error) {
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.GET_WIRE_CHARACTER_FAIL,
    });
  }
}

export {
  getCharacterSaga,
  getWireCharacterSaga
};

