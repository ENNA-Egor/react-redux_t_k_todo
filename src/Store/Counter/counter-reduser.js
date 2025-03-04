// import {INCREMENT, DECREMENT, RESET} from './counter-const';
import {increment, decrement, reset} from './counter-actions';

export const counterReducer = (state = 0, action) => {
    switch (action.type) {
      case increment.toString(): {
        return state + 1;
      }
      case decrement.toString(): {
        return state - 1;
      }
      case reset.toString(): {
        return 0;
      }
      default: {
        return state;
      }
    }
  };