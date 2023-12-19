import { takeLatest } from 'redux-saga/effects';
import { actionTypes } from '../../utilities/constants'; 
import { getCharacterSaga, getWireCharacterSaga } from './appSagas';

export default function* rootSaga() {
  //auth sagas
  yield takeLatest(actionTypes.GET_CHARACTER_REQUESTED, getCharacterSaga);
  yield takeLatest(actionTypes.GET_WIRE_CHARACTER_REQUESTED, getWireCharacterSaga);

}
