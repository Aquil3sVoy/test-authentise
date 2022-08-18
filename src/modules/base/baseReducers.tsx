import actions from "src/modules/base/baseActions";

const initialData = {
  loading: false,
  data: [] as Array<any>,
};

export default (state = initialData, { type, payload }) => {
  if (type === actions.BASE_INIT_SUCCESS) {
    return {
      ...state,
      loading: false,
      data: payload || null,
    };
  }

  if (type === actions.FETCH_INIT) {
    return {
      ...state,
      loading: true,
      data: [],
    };
  }
  if (type === actions.FETCH_SUCCESS) {
    return {
      ...state,
      loading: false,
      data: payload || null,
    };
  }

  return state;
};
