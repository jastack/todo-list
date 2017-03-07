import {RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP} from '../actions/step_actions.js';
import merge from 'lodash/merge';
import { stepsByTodoId } from './selectors';

const initialState = {
    1: {
      id: 1,
      title: "walk to store",
      done: false,
      todo_id: 1
    },
    2: {
      id: 2,
      title: "buy soap",
      done: false,
      todo_id: 1
    }
};

const stepsReducer = (state = initialState, action) => {
  switch(action.type){
    case RECEIVE_STEPS:
      let newState = {};
      stepsByTodoId(action).forEach((step) => {
        newState[step.id] = step;
      });
      return newState;
    case RECEIVE_STEP:
      newState = merge({}, state);
      newState[action.step.id] = action.step;
      return newState;
    case REMOVE_STEP:
      newState = merge({}, state);
      delete newState[action.step.id];
      return newState;
    default:
      return state;
  }
};

export default stepsReducer;
