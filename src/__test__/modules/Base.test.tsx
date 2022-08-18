import actions from "src/modules/base/baseActions";
import baseReducers from "src/modules/base/baseReducers";
const previousState = {
  loading: false,
  data: [],
};
describe("test modules unite test", () => {
  it("test baseActions", () => {
    const action = {
      type: actions.BASE_INIT_SUCCESS,
      payload: {
        message: "test",
        status: "success",
      },
    };
    const expectedState = {
      loading: false,
      data: {
        message: "test",
        status: "success",
      },
    };
    expect(baseReducers(previousState, action)).toEqual(expectedState);
  });
  it('"trigger FETCH_INIT"', () => {
    const action = {
      type: actions.FETCH_INIT,
      payload: [],
    };
    const expectedState = {
      loading: true,
      data: [],
    };
    expect(baseReducers(previousState, action)).toEqual(expectedState);
  });
  it("trigger FETCH_SUCCESS", () => {
    const action = {
      type: actions.FETCH_SUCCESS,
      payload: {
        message: "test",
        status: "success",
      },
    };
    const expectedState = {
      loading: false,
      data: {
        message: "test",
        status: "success",
      },
    };
    expect(baseReducers(previousState, action)).toEqual(expectedState);
  });
});
