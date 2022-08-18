import { createSelector } from "reselect";

const selectState = (state) => state.base;
const selectLoading = createSelector([selectState], (base) => base.loading);
const selectMessage = createSelector(
  [selectState],
  (base) => base.data.message
);

const authSelectors = {
  selectState,
  selectMessage,
  selectLoading,
};

export default authSelectors;
