import { ActionTypes } from '../../store/action-types';

const initialState = {
  temperature: [],
  totalTemp: 0,
  totalVariance: 0,
  isLoaded: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_DATA_TEMPERATURE: {
      return Object.assign({}, state, {
        temperature: action.temperature,
        totalTemp: action.totalTemp,
        totalVariance: action.totalVariance,
        isLoaded: action.isLoaded,
      });
    }
    default: {
      return state;
    }
  }
};

export default reducer;

