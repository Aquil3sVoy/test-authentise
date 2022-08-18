import actions from 'src/modules/base/baseActions';

export default (store) => {
  store.dispatch(actions.doInit());
};
