import { actionTypes } from '../../utilities/constants';

const getCharacters = (payload, cb) => {
  return {
    type: actionTypes.GET_CHARACTER_REQUESTED,
    payload,
    cb,
  };
};

const getWireCharacters = (payload, cb) => {
  return {
    type: actionTypes.GET_WIRE_CHARACTER_REQUESTED,
    payload,
    cb,
  };
};
export {
  getCharacters,
  getWireCharacters
};
