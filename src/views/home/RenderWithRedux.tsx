import React from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "src/modules/base/baseActions";
import selectors from "src/modules/base/baseSelectors";
import ListComponent from "../../component/list/ListComponent";

export default function RenderWithRedux(): JSX.Element {
  const dispatch = useDispatch();
  const img = useSelector(selectors.selectMessage);
  const loading = useSelector(selectors.selectLoading);
  const onCLick = () => {
    dispatch(actions.doFetch());
  };

  return <ListComponent loading={loading} img={img} onCLick={onCLick} />;
}
