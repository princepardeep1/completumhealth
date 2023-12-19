import { actionTypes } from "../../utilities/constants";

const initialState = {
  loading: false,
  listArr: []
};


export default (state = initialState, action) => {

  switch (action.type) {


    case actionTypes.GET_CHARACTER_REQUESTED:
      return {
        ...state,
        loading: true,
        listArr: []
      };

    case actionTypes.GET_CHARACTER_SUCCEEDED:
      return {
        ...state,
        loading: false,
        listArr: action.payload
      };

    case actionTypes.GET_CHARACTER_FAIL:
      return {
        ...state,
        loading: false,
        listArr: []
      };


    case actionTypes.GET_WIRE_CHARACTER_REQUESTED:
      return {
        ...state,
        loading: true,
        listArr: []
      };

    case actionTypes.GET_WIRE_CHARACTER_SUCCEEDED:
      return {
        ...state,
        loading: false,
        listArr: action.payload
      };

    case actionTypes.GET_WIRE_CHARACTER_FAIL:
      return {
        ...state,
        loading: false,
        listArr: []
      };


    default:
      return state;
  }
};
