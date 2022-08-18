import { connectRouter } from 'connected-react-router';
import base from 'src/modules/base/baseReducers';
import { combineReducers } from 'redux';

export default (history: any) =>
  combineReducers({
    router: connectRouter(history),
    base,
  });
