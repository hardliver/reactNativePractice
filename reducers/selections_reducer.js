import {
  SELECT_KEY_INDEX,
  SELECT_CAPO
} from '../actions/types';

const INITIAL_STATE = {
  selectKeyIndex: 0,
  selectCapo: 7
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_KEY_INDEX: {
      return {
        ...state,
        selectKeyIndex: action.payload
      };
    }
    case SELECT_CAPO: {
      return {
        ...state,
        selectCapo: action.payload
      };
    }
    default:
      return state;
  }
}
