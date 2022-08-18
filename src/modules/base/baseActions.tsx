import BaseService from "src/modules/base/baseService";

const prefix = "BASE";

const baseActions = {
  BASE_INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,

  FETCH_INIT: `${prefix}_FETCH_INIT`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,

  doInit: () => async (dispatch) => {
    const response = await BaseService.random();
    dispatch({
      type: baseActions.BASE_INIT_SUCCESS,
      payload: response,
    });
  },
  doFetch: () => async (dispatch) => {
    dispatch({
      type: baseActions.FETCH_INIT,
    });
    const response = await BaseService.random();
    dispatch({
      type: baseActions.FETCH_SUCCESS,
      payload: response,
    });
  },
};

export default baseActions;
